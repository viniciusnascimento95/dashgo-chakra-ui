import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Vinicius Nascimento</Text>
                <Text color="gray.300" fontSize="small">
                    nascimento.vinicius32@gmail.com</Text>
            </Box>
            <Avatar size="md" nome="Vinicius" src="https://avatars.githubusercontent.com/u/28835924?v=4"/>
        </Flex>
    );
}

