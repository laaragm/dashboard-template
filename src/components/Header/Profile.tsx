import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Lara Galvani</Text>
                    <Text color="gray.300">laragalvanim@gmail.com</Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Lara Galvani"
                src="https://github.com/laaragm.png"
            />
        </Flex>
    );
}
