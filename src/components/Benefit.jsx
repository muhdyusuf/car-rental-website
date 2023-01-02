import React, { useRef, useState } from 'react'
import { motion, isValidMotionProp } from 'framer-motion';
import { Card, CardBody,Text,Image, CardFooter, Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,Box, EASINGS, Center, Circle} from '@chakra-ui/react'

import { useNavigate, useParams } from 'react-router-dom';

import {GrMoney,GrLocation} from 'react-icons/gr'
import {TbZoomMoney} from 'react-icons/tb'

// import './benefit.css'

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
        ref={containerRef}
    >
        <ChakraBox
            display='grid'
            rowGap="1.5rem"
            overflow="hidden"
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            
            <ChakraBox variants={item}
                display="flex"
                alignItems="center"
            >
                <Circle 
                    bg='blue.200'
                    width="clamp(100px,30%,100px)"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <GrMoney fontSize="3rem"/>
                </Circle>
                <Box px="1rem" w="100%">
                    <Text as="b" fontSize="lg" textAlign="center">
                        Value For Money
                    </Text>
                    <Text>
                        Know exactly what you’re paying
                    </Text>
                </Box>
            </ChakraBox>
            <ChakraBox variants={item}
                display="flex"
                alignItems="center"
            >
                <Circle 

                    bg='green.200'
                    width="clamp(100px,30%,100px)"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <GrLocation fontSize="3rem"/>
                </Circle>
                <Box px="1rem" w="100%">
                    <Text as="b" fontSize="lg" textAlign="center">
                        Value For Money
                    </Text>
                    <Text>
                        Know exactly what you’re paying
                    </Text>
                </Box>
            </ChakraBox>
            <ChakraBox variants={item}
                display="flex"
                alignItems="center"
            >
                <Circle 
                    bg='red.200'
                    width="clamp(100px,30%,100px)"
                    height="auto"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <TbZoomMoney fontSize="3rem"/>
                </Circle>
                <Box px="1rem" w="100%">
                    <Text as="b" fontSize="lg" textAlign="center">
                        Value For Money
                    </Text>
                    <Text>
                        Know exactly what you’re paying
                    </Text>
                </Box>
            </ChakraBox>

        </ChakraBox>
    </Box>

  )
}

export default Benefit