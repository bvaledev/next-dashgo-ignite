import {Flex, Box, Text, Heading, Checkbox, Button, Icon, Table, Thead, Tr, Th, Td,Tbody, useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link'
import { Header } from "../../components/Header";
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';


export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        maxWidth="1488"
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar/>


        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex marginBottom="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  >
                  Criar usuário
                </Button>
              </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th padding="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th> Usuário </Th>
                <Th> Data de cadastro </Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td padding="6"><Checkbox colorScheme="pink"/></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Brendo Vale</Text>
                    <Text fontSize="small" color="gray.300">brendo@moveeup.com</Text>
                  </Box>
                </Td>
                <Td> 04 de Abril, 2021</Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                >
                  Editar
                </Button>
                </Td>
              </Tr>


            </Tbody>
          </Table>

          <Pagination/>
        </Box>
      </Flex>
    </Box>
  )
}
