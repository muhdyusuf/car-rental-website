import React, { useState } from 'react'
// import {axiaMerah} from '../assets/images'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './CarCard.css'
import { motion, isValidMotionProp } from 'framer-motion';
import { Card, CardBody,Text,Image, CardFooter, Grid, GridItem,Button, Heading,shouldForwardProp,chakra, Container,Box, EASINGS, Center} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

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
    console.log(car)
    const navigate=useNavigate()
    const [isActive,setActive]=useState()

  return (
    <Container p="0">
        <ChakraBox
            display='grid'
            gridTemplateRows='300px 1fr 100px'
            height="500px"
            bg="teal"
            borderRadius="1rem"
            overflow="hidden"
            animate={isActive?{
                height:"100vh"
                
            }:{
                width:"100vw"
            }}
            transition={{
                duration:1
            }}
        >
            <Box overflow="hidden" position="relative">
                <ChakraImg
                    src={car.src}
                    alt="dasf"
                    
                    initial={{
                        position:"absolute",
                        top:"-30%",
                        right:"-20%",
             
                    }}
                    animate={isActive?{
                        top:"-30%",
                        right:"0%",

                    }:{}}
                    
                    
                />
                

            </Box>
         
            <Box>
                <Heading as="h2">
                    perodua
                </Heading>
                <Text>
                    Axia 2022
                </Text>
              
            </Box>
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
                        onClick={()=>navigate("/car")}
                        
                    >
                        Book
                        <AiOutlineArrowRight/>
                        </Button>
                    </GridItem>
            </Grid>

        </ChakraBox>






    </Container>




    // <Card className={isActive?"car-card active":"car-card"}>
    //     <CardBody>
    //         <Image src={axiaMerah} alt="axia merah" className='car-images'/>
    //         <Text>
    //             <Heading as='h3' fontSize="1rem">
    //                 Perodua Axia
    //             </Heading>
    //         </Text>
    //     </CardBody>
    //     <CardFooter p='0' className='card-footer'>
    //         <Grid 
    //             templateColumns="1fr 1fr" 
    //             gap="1rem" 
    //             width="100%" 
    //             p="0"
                
            
    //         >
    //             <GridItem>
    //                 fsdfdsfa
    //             </GridItem>
    //             <GridItem>
    //                 <Button 
    //                     h="100%"
    //                     borderRadius="1rem 0 0 0"
    //                     width="100%"
    //                     colorScheme="teal"
    //                     onClick={()=>setActive(!isActive)}
    //                 >
    //                     Book
    //                     <AiOutlineArrowRight/>
    //                 </Button>
    //             </GridItem>
    //         </Grid>

    //     </CardFooter>
      
        

    // </Card>
  )
}

export default CarCard