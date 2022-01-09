import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
};

type GetUsersResponse = {
    totalCount: number;
    users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const { data, headers } = await api.get("users", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const users = data.users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString("en", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }),
        };
    });

    return { users, totalCount };
}

export function useUsers(page: number, options: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["users", page],
        () => getUsers(page),
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetUsersResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
