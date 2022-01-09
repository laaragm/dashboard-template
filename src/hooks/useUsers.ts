import { useQuery } from "react-query";

import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
};

export async function getUsers(): Promise<User[]> {
    const { data } = await api.get("users");
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

    return users;
}

export function useUsers() {
    const { data, isLoading, isFetching, error } = useQuery("users", getUsers, {
        staleTime: 1000 * 15,
    });

    return { data, isLoading, isFetching, error };
}
