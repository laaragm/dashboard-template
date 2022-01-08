import { Box, Flex, Icon, Input, Stack, Text, Avatar } from "@chakra-ui/react";
import {
    RiNotificationLine,
    RiSearchLine,
    RiUserAddLine,
} from "react-icons/ri";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            alignItems="center"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                dashgo
                <Text as="span" ml="1" color="pink.500">
                    .
                </Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                bg="gray.800"
                borderRadius="full"
                // position="relative"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Search"
                    _placeholder={{ color: "gray.400" }}
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex alignItems="center" ml="auto">
                <Stack
                    spacing="8"
                    direction="row"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </Stack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Lara Galvani</Text>
                        <Text color="gray.300">laragalvanim@gmail.com</Text>
                    </Box>

                    <Avatar
                        size="md"
                        name="Lara Galvani"
                        src="https://github.com/laaragm.png"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}