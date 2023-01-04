import { Box, chakra, Circle, Container, Grid, GridItem, Heading, Image, shouldForwardProp, Switch, Text, useColorMode} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'
import { redirect, useNavigate } from 'react-router'
import { useAuth } from '../../context/authContext'
import { useEffect } from 'react'
import { isValidMotionProp, motion } from 'framer-motion'

import {MdOutlineNightlight,MdOutlineLightMode} from 'react-icons/md'
import RentedCar from './RentedCar'

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
                    <Image src={user.photoURL}/>
                </Circle>
                <Heading 
                    as="h2" 
                    height="60px"
                    size="md"
                    ml=".5rem"
                    display="flex"
                    alignItems="center"
                >
                    {user.uid}
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
        <Box p="1rem"
            display="grid"
            gridTemplateColumns="1fr"
            rowGap="1rem"
        >
            <RentedCar id={user.uid}/>
           
            <Grid
                width="100%"
                border=".2rem solid black"
                borderRadius="1rem"
                p=".5rem"
                
            >
                <GridItem>
                    <Heading>
                        Profile
                    </Heading>
                </GridItem>
                <GridItem as='h3'>
                    {user.emailVerified?"verified":"not"}
                </GridItem>
                <GridItem>
                    {user.email}
                </GridItem>
                
            </Grid>
            <Grid 
             p=".5rem"
            >
                <GridItem>
                    <Heading>
                        Setting
                    </Heading>
                </GridItem>
            </Grid>







        </Box>
    </Container>
  )
}

export default User