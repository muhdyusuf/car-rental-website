import React, { useState } from 'react'
// import {axiaMerah} from '../assets/images'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './CarCard.css'
import { motion, isValidMotionProp } from 'framer-motion';
import { Card, CardBody,Text,Image, CardFooter, Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,Box, EASINGS, Center} from '@chakra-ui/react'

import { useNavigate, useParams } from 'react-router-dom';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
const ChakraImg = chakra(motion.img, {
/**
 * Allow motion props and non-Chakra props to be forwarded.
 */
shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const CarCard = ({car}) => {
    
    const navigate=useNavigate()
   

  return (
  
        <ChakraBox
            display='grid'
            gridTemplateRows='3fr 1.2fr 1fr'
            bg={car.bg}
            borderRadius="1rem"
            overflow="hidden"
            height="100%"
            border=".2rem solid black"
            sx={{
                aspectRatio:"1/1.1"
            }}
           
        >
            <Box overflow="hidden" position="relative">
                <ChakraImg
                    src={car.src}
                    alt="dasf"
                    
                    initial={{
                        position:"absolute",
                        top:"-25%",
                        right:"-15%",
                        scale:"1.2"
             
                    }}
                 
                    
                    
                />
                

            </Box>
         
            <Box 
                px="1.5rem"
            >
               
                <Text  
                    textTransform="capitalize"
                    fontSize="2xl"
                    as="b"
                >
                    {car.manufacturer }
                    <Text as="span" fontWeight="normal">
                        {` ${car.model}`}
                    </Text>
                </Text>
                <Text>
                    Transmission : {car.transmission}
                </Text>
              
            </Box>
            <Grid   
                width="100%"
                templateColumns="3fr 3fr"
                height="100%"
             
            > 
                    <GridItem>
                        <Center    
                            height="100%"
                            width="100%"
                            padding=".5rem"
                            fontWeight="bold"

                        >
                           {`Rm${car.rate} / Day`}
                        </Center>
                    </GridItem>
                    <GridItem >
                        <Button
                            height="100%"
                            width="100%"
                            borderRadius="1rem 0 0 0"
                            bg="yellow.300"
                            colorScheme="yellow"
                            onClick={()=>navigate(`/car/${car.id}`)}     
                        >
                   
                         <AiOutlineArrowRight fontSize={"2rem"}/>
                        </Button>
                    </GridItem>
            </Grid>

        </ChakraBox>

  )
}

export default CarCard