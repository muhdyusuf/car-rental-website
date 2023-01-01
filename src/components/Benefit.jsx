import React, { useRef, useState } from 'react'
import { motion, isValidMotionProp } from 'framer-motion';
import { Card, CardBody,Text,Image, CardFooter, Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,Box, EASINGS, Center, Circle} from '@chakra-ui/react'

import { useNavigate, useParams } from 'react-router-dom';

import {GrMoney,GrLocation} from 'react-icons/gr'

import './benefit.css'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
const ChakraLi = chakra(motion.li, {
/**
 * Allow motion props and non-Chakra props to be forwarded.
 */
shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Benefit = ({car}) => {
    
    const navigate=useNavigate()
    const container = {
     
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            when:"beforeChildren",
            staggerChildren: .1,
        
          }
        }
      }
      
      const item = {
        hidden: { x: "100%" },
        show: { x: 0 }
      }

      const containerRef=useRef(null)
      
   

  return (
    <Box 
        padding="2rem 0"
        ref={containerRef}
    >

        <ChakraBox
            className='benefit-cont'
            display='grid'
            gridTemplateColumns="200px"
            borderRadius="1rem"
            overflow="hidden"
       
            variants={container}
            initial="hidden"
            whileInView="show"
          
        >
            
            <ChakraBox variants={item}>
                <Circle 
                    mb="1rem"
                    bg='blue.200'
                    width="50%"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <GrMoney fontSize="3rem"/>
                </Circle>
                <Text size="md" textAlign="center">
                    Value For Money
                </Text>
            </ChakraBox>
            <ChakraBox variants={item}>
                <Circle 
                    mb="1rem"
                    bg='red.200'
                    width="50%"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <GrLocation fontSize="3rem"/>
                </Circle>
                <Text size="md" textAlign="center">
                    Flexible Pickup Location
                </Text>
            </ChakraBox>
            <ChakraBox variants={item}>
                <Circle 
                    mb="1rem"
                    bg='green.200'
                    width="50%"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <GrLocation fontSize="3rem"/>
                </Circle>
                <Text size="md" textAlign="center">
                    Flexible Pickup Location
                </Text>
            </ChakraBox>
        </ChakraBox>
    </Box>

  )
}

export default Benefit