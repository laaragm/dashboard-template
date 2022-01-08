import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form";

type SignInFormData = {
    email: string;
    password: string;
};

const signInFormSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required"),
});

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema),
    });

    const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
        console.log(values);
    };

    return (
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <Flex
                as="form"
                w="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDirection="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        error={formState.errors.email}
                        {...register("email")} // previous usage: ref={register}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        ref={register}
                        error={formState.errors.password}
                        {...register("password")}
                    />
                </Stack>
                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    isLoading={formState.isSubmitting}
                >
                    Sign in
                </Button>
            </Flex>
        </Flex>
    );
}
