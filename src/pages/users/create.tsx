import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";

import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function UserCreate() {
    return (
        <Box>
            <Header />
            <Flex w="100" my="6" maxWidth={1480} mx="auto" px="8">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" px={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
