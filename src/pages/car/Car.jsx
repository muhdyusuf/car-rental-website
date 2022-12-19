import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion, isValidMotionProp, delay } from 'framer-motion';
import { Card, CardBody,Text,Image, CardFooter, Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,Box, EASINGS, Center, ring} from '@chakra-ui/react'
import { useState } from 'react'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Car = ({car}) => {
   
  return (
    <Container p="0">
    <ChakraBox

        height="100vh"
    >
          <ChakraBox
            zIndex="1"
            bg="gray.800"
            initial={{
                height:"0"
            }}
            animate={{
                height:"20vh"
            }}
            transition={{
                duration:.5
            }}
          />

          <ChakraBox
            position="relative"
            display="grid"
            gridTemplateRows="auto 100px"
            bg="teal"
           initial={{
               height:"500px"
           }}
           animate={{
               height:"80vh",
           
           }}
           transition={{
               duration:.5,
             
           }}
          >
            <ChakraBox
              
                width="100vw"
                position="relative"

                
            >
                    <motion.img
                        src={require("../../assets/images/axia-1.png")}
                        alt="dasf"

                        animate={
                            {  
                                position:"absolute",
                                x:[100,100,0],
                                y:[-100,-250,-250],
                                scale:[1,1,0.8]
                            }
                        }
                        transition={{
                            duration:1,
                            ease:"easeInOut"
                        }}
                       
                       
                      
                    />
                    
                <ChakraBox 
                    initial={{
                        y:260

                    }}
                    animate={{
                        y:100
                    }}
                    transition={{
                        duration:1
                    }}
                   
                >
                    <Heading as="h2">
                        perodua
                    </Heading>
                    <Text>
                        Axia 2022
                    </Text>
                </ChakraBox>
                    
            </ChakraBox>

            
            <Grid   
                templateColumns="3fr 2fr"
                height="100%"
             
            > 
                    <GridItem>
                        <Text    
                            height="100%"
                            width="100%"
                            padding=".5rem"
                        >
                            Rm 
                            <Text as="span" fontWeight="bold">100</Text>
                        </Text>
                    </GridItem>
                    <GridItem >
                        <Button
                        height="100%"
                        width="100%"
                        borderRadius="1rem 0 0 0"
                        colorScheme="teal"
                        
                    >
                        Book
                        <AiOutlineArrowRight/>
                        </Button>
                    </GridItem>
            </Grid>
      
            
            
          </ChakraBox>
      
    </ChakraBox>


    </Container>

  )
}


export default Car