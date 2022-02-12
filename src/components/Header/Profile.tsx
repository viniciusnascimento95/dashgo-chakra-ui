import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Vinicius Nascimento</Text>
                    <Text color="gray.300" fontSize="small">
                        nascimento.vinicius32@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" nome="Vinicius" src="https://github.com/viniciusnascimento95.png" />
        </Flex>
    );
}

