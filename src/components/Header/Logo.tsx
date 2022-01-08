import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={["2xl", "3xl"]} // 2xl for mobile and 3xl onwards
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >
            dashgo
            <Text as="span" ml="1" color="pink.500">
                .
            </Text>
        </Text>
    );
}
