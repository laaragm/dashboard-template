import Link from "next/link";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Form";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(1, "The name should have at least 8 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "The password should have at least 8 characters"),
    passwordConfirmation: yup
        .string()
        .oneOf([null, yup.ref("password")], "Passwords must match"),
});

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(
        async (user: CreateUserFormData) => {
            const response = await api.post("users", {
                user: {
                    ...user,
                    createdAt: new Date(),
                },
            });

            return response.data.user;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("users");
            },
        }
    );
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
        values,
        event
    ) => {
        await createUser.mutateAsync(values);
        router.push("/users");
    };

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Create user
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <Stack spacing="8">
                        <SimpleGrid
                            minChildWidth="15rem"
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input
                                name="name"
                                label="Full name"
                                error={formState.errors.name}
                                {...register("name")}
                            />
                            <Input
                                name="email"
                                label="Email"
                                type="email"
                                error={formState.errors.email}
                                {...register("email")}
                            />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth="15rem"
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                error={formState.errors.password}
                                {...register("password")}
                            />
                            <Input
                                name="passwordConfirmation"
                                label="Confirm your password"
                                type="password"
                                error={formState.errors.passwordConfirmation}
                                {...register("passwordConfirmation")}
                            />
                        </SimpleGrid>

                        <Flex mt="8" justify="flex-end">
                            <Stack direction="row" spacing="4">
                                <Link href="/users" passHref>
                                    <Button as="a" colorScheme="whiteAlpha">
                                        Cancel
                                    </Button>
                                </Link>
                                <Button
                                    colorScheme="pink"
                                    type="submit"
                                    isLoading={formState.isSubmitting}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}
