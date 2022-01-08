import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../components/Form";

type SignInFormData = {
    email: string;
    password: string;
};

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm();

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
                        ref={register}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        ref={register}
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
