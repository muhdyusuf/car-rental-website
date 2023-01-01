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
            sx={{
                aspectRatio:"1/1.2"
            }}
           
        >
            <Box overflow="hidden" position="relative">
                <ChakraImg
                    src={car.src}
                    alt="dasf"
                    
                    initial={{
                        position:"absolute",
                        top:"-20%",
                        right:"-15%",
                        scale:"1.2"
             
                    }}
                 
                    
                    
                />
                

            </Box>
         
            <Box 
                px="1.5rem"
            >
                <Heading 
                    as="h3"
                    size="2xl"
                    textTransform="capitalize"
                >
                    {car.manufacturer}
                </Heading>
                <Text  
                    textTransform="capitalize"
                    fontSize="2xl"
                >
                    {car.model}
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
                        >
                           {`Rm${car.rate} / day`}
                        </Center>
                    </GridItem>
                    <GridItem >
                        <Button
                            height="100%"
                            width="100%"
                            borderRadius="1rem 0 0 0"
                            colorScheme="yellow"
                            onClick={()=>navigate(`car/${car.id}`)}     
                        >
                   
                         <AiOutlineArrowRight fontSize={"2rem"}/>
                        </Button>
                    </GridItem>
            </Grid>

        </ChakraBox>

  )
}

export default CarCard