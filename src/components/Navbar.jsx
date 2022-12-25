import { Box, Container, ListItem, UnorderedList, useColorMode,Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {GrHomeRounded} from 'react-icons/gr'
import {RiUser3Line} from 'react-icons/ri'
import {IoCarOutline} from 'react-icons/io5'

function Navbar() {
    const {colorMode,toggleColorMode}=useColorMode()
  return (
    <Box>
        <Box
            p="0"
            position="fixed"
            bottom="0"
            right="0"
            h="60px"
            w="100vw"
            zIndex="99999"
            shadow="sm"
            bg="white"
            
        
        >
            <Container 
                p={0}
                maxW="900px"
                h="100%"
              
                
            
            >
                <UnorderedList
                    display={"flex"}
                    justifyContent="space-around"
                    alignItems="center"
                    listStyleType="none"
                    h="100%"
                    fontSize="1.5rem"
                    color="black"
                    >
                    <ListItem>
                        <Link to="/"><GrHomeRounded/></Link>
                    </ListItem>
                    <ListItem
                        fontSize="2rem"
                    >
                        <Link to="/car">
                            <IoCarOutline/>
                        </Link>
                    </ListItem>
                    <ListItem 
                    >
                        <Link to="/user/kkkn"><RiUser3Line/></Link>
                   </ListItem>
                    <ListItem>
                        <Button onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                        </Button>
                    </ListItem>
                </UnorderedList>
            </Container>
        </Box>
        <Box h="60px">

        </Box>
    </Box>
  )
}

export default Navbar