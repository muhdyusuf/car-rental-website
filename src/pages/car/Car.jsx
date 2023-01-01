import React, { useEffect } from 'react';
import { useState } from 'react';

import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion, isValidMotionProp, delay } from 'framer-motion';
import {Text,Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,useColorModeValue} from '@chakra-ui/react'

import { useNavigate, useParams } from 'react-router-dom';
import { ref,getMetadata} from 'firebase/storage';
import {query,collection,getDocs,getDoc,doc} from 'firebase/firestore'

import { storage } from '../../utils/firebaseConfig';
import { db } from '../../utils/firebaseConfig';
import ConfirmationModal from './ConfirmationModal';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Car = () => {
    const navigate=useNavigate()
    const params=useParams()
    const carId=params.carId
    const [carDetails,setCarDetails]=useState({})
    

    async function getCars(){
        const docRef = doc(db, "cars",carId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setCarDetails({id:docSnap.id,...docSnap.data()})
        } else {
        
          console.log("No such document!");
        }
    }

    useEffect(()=>{
        getCars()
        return ()=>{

        }
    },[])
  
  
   
  return (
    <Container p="0">
        <ChakraBox
            overflow="hidden"
            

        >
            <ChakraBox
         
                initial={{
                    height:"30vh"
                }}
                animate={{
                    height:"20vh"
                }}
                transition={{
                    duration:.5
                }}
            />

            <ChakraBox
                bg={carDetails.bg}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
               
                initial={{
                    height:"calc(70vh - 60px)"
                }}
                animate={{
                    height:"calc(80vh - 60px)",
                
                  
                }}
                transition={{
                    delay:.5,
                    duration:.5,
                    
                }}
            >
                <ChakraBox
                    width="100%"
                    height="auto"
                    position="relative"

                    animate={
                        {  
                            height:"20vw"
                           
                        }
                    }
                    transition={{
                      
                    }}

                    
                >
                    <motion.img
                            src={carDetails.src}
                            alt="dasf"

                            animate={
                                {  
                                    y:[-100,-220,-220],
                                    position:"absolute",
                                    x:[50,50,0],
                                    scale:[1.2,1.2,1]
                                }
                            }
                            transition={{
                                duration:1,
                                ease:"easeInOut"
                            }}
                        
                        
                        
                    />
                        
                        
                </ChakraBox>
                <ChakraBox 
                    overflow="hidden"
                    px="1rem"
                  
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        delay:1,
                        duration:.5
                    }}
          
                
                >
                    <Grid 
                        w="100%"
                        templateColumns="repeat(4,1fr)"
                        gap="1rem"
                        mb="1rem"
               
                    >
                        <GridItem 
                         bg='rgba(0,0,0,.2)'
                         boxShadow="sm"
                         height='auto'
                         borderRadius="md"
                         sx={{aspectRatio:'1/1'}}
                        >
                            auto
                        </GridItem>
                        <GridItem 
                         bg='rgba(0,0,0,.2)'
                         boxShadow="sm"
                         height='auto'
                         borderRadius="md"
                         sx={{aspectRatio:'1/1'}}
                        >
                            auto
                        </GridItem>
                        <GridItem 
                         bg='rgba(0,0,0,.2)'
                         boxShadow="sm"
                         height='auto'
                         borderRadius="md"
                         sx={{aspectRatio:'1/1'}}
                        >
                            {carDetails.transmission}
                        </GridItem>

                        <GridItem 
                         bg='rgba(0,0,0,.2)'
                         boxShadow="sm"
                         height='auto'
                         borderRadius="md"
                         sx={{aspectRatio:'1/1'}}
                        >
                            15.47km/l
                        </GridItem>
                      
                        
                    </Grid>
                    <Heading 
                        as="h3"
                        size="xl"
                        textTransform="capitalize"
                    >
                        {carDetails.manufacturer}
                    </Heading>
                    <Text  
                        textTransform="capitalize"
                        fontSize="xl"
                    >
                        {carDetails.model}
                    </Text>
                    <Text>
                        {carDetails.description}
                    </Text>
                </ChakraBox>

                
                <Grid  
                    height="80px"
                    w="100%"
                    gridTemplateColumns={"3fr 3fr"}
                > 
                        <GridItem
                            display="grid"
                            placeContent="center"
                        >
                            <Text as="b" >
                                {`Rm${carDetails.rate} / day`}
                            </Text>
                        </GridItem>
                        <GridItem >
                            <Button
                            width={"100%"}
                            h="100%"
                            borderRadius="1rem 0 0 0"
                            colorScheme="yellow"
                            // onClick={()=>navigate("/rent")}
                            >   
                                <ConfirmationModal/>
                            </Button>
                        </GridItem>
                </Grid>
        
                
                
            </ChakraBox>
        
        </ChakraBox>


    </Container>

  )
}


export default Car