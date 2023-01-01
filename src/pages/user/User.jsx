import { Box, chakra, Circle, Container, Grid, GridItem, Heading, shouldForwardProp, Switch, Text, useColorMode} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'
import { redirect, useNavigate } from 'react-router'
import { useAuth } from '../../context/authContext'
import { useEffect } from 'react'
import { isValidMotionProp, motion } from 'framer-motion'

import {MdOutlineNightlight,MdOutlineLightMode} from 'react-icons/md'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

function User() {
    const {colorMode,toggleColorMode}=useColorMode()
    const {user}=useAuth()
    const navigate=useNavigate()
    useEffect(() => {
      redirect("/login")
    
      return () => {
        
      }
    }, [])
    
  return (
    <Container 
       
        p="0"
    >
        <Grid
            height="20vh"
            bg="teal"
            templateColumns="4fr 2fr"
            p="1rem"
            boxShadow="md"
        >
            <GridItem
                display="flex"
                alignItems="flex-end"
                
            >
                <Circle
                    bg="yellow"
                    height="60px"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                    top
                >
                
                </Circle>
                <Heading 
                    as="h2" 
                    height="60px"
                    size="md"
                    ml=".5rem"
                    display="flex"
                    alignItems="center"
                >
                    Username
                </Heading>
            </GridItem>
            <GridItem 
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
                onClick={toggleColorMode}
                fontSize="1.5rem" 
            >
               {colorMode==="light"?(
                <MdOutlineNightlight/>
               ):(
                <MdOutlineLightMode/>
               )}
              
            </GridItem>
           
        </Grid>
        <Box p="1rem">
            <Grid
                templateColumns="2fr 2fr"
                gap="1rem"
                height="150px"
                width="100%"
                border="1px"
                p=".5rem"
                borderRadius="1rem"
                bg="yellow.300"
            >
                <GridItem
                    borderRight="1px"
                >
                    <Heading 
                        as="h3"
                        size="md"
                    >
                        Current Order   
                    </Heading>
                    <Box
                        h="100px"
                        w="100px"
                        bg="messenger.100"
                    >
                    
                    </Box>
                </GridItem>
                
                <GridItem
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Text as="p" fontSize="md">
                        Perodua alza
                    </Text>
                    <Box>
                        <Text as="b" fontSize="2xl">
                            Time Left
                        </Text>
                        <Text as="p" fontSize="2xl">
                            24 : 00
                        </Text>
                    </Box>

                </GridItem>
            </Grid>
            <Grid
                width="100%"
                border="2px"
                borderRadius="1rem"
                
            >
                <GridItem as='h3'>
                    Profile
                </GridItem>
                <GridItem>
                    sdasdsd
                </GridItem>
                


            </Grid>












        </Box>
    </Container>
  )
}

export default User