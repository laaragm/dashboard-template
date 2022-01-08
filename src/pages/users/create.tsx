import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react";

import { Input } from "../../components/Form";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">
                        Create user
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <Stack spacing="8">
                        <SimpleGrid minChildWidth="15rem" spacing="8" w="100%">
                            <Input name="name" label="Full name"></Input>
                            <Input
                                name="email"
                                label="Email"
                                type="emal"
                            ></Input>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="15rem" spacing="8" w="100%">
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                            ></Input>
                            <Input
                                name="password_confirmation"
                                label="Confirm your password"
                                type="password"
                            ></Input>
                        </SimpleGrid>

                        <Flex mt="8" justify="flex-end">
                            <Stack direction="row" spacing="4">
                                <Button colorScheme="whiteAlpha">Cancel</Button>
                                <Button colorScheme="pink">Save</Button>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}
