import { Box, Circle, Container, Grid, GridItem, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'

function User() {
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
                
            >
               <AiOutlineSetting
                fontSize="2rem"
               />
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