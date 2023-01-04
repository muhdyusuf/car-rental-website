import { Grid,Text,GridItem,Heading,Box, Image, Skeleton, SkeletonText } from '@chakra-ui/react'
import { async } from '@firebase/util'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../utils/firebaseConfig'

const RentedCar = ({id}) => {
    const [rentedCar,setRentedCar]=useState(false)

    const [loading,setLoading]=useState(false)

    async function getRentedCar(){
        setLoading(true)
        const rentedCarRef=collection(db,"rented")
        const q=query(rentedCarRef,where("renterId","==",id))

        const querySnapshot = await getDocs(q);

        let rentedCar={}

        querySnapshot.forEach((doc) => {
            let {start,carId}=doc.data()
            rentedCar.id=carId
            rentedCar.start=start
           
        });
        
        const carRef=doc(db,"cars",rentedCar.id)
        const carSnapshot=await getDoc(carRef)

        if(carSnapshot.exists()){
            console.log(carSnapshot.data())
            setRentedCar(carSnapshot.data())
            setLoading(false)
        }  
    }

    useEffect(() => {
      getRentedCar()
      return () => {
        
      }
    }, [])
    



  return (
        <Grid
                    
            gap="1rem"
            width="100%"
            border=".2rem solid black"
            p=".5rem"
            borderRadius="1rem"
            bg="yellow.300"
        >
            <GridItem>
                <Heading as="h2">Order Detail</Heading>
            </GridItem>
            <GridItem
                display="flex"
            >
                {loading?(
                <Skeleton 
                    width="40%"
                    height="auto"
                    bg="red.400"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                </Skeleton>
                ):(
                <Box 
                    width="40%"
                    height="auto"
                    bg="red.400"
                    sx={{
                        aspectRatio:"1/1"
                    }}
                >
                    <Image src={rentedCar.src}
                        objectFit="cover"
                        boxSize="100%"
                    />
                </Box>
                )}
                <Box marginLeft="1rem">
                    {loading?(
                    <Skeleton w="100%">
                        <Text>Lorem, ipsum dolor.</Text>
                    </Skeleton>
                    ):(
                    <Text
                        as="b"
                        textTransform={"capitalize"}
                    >
                        {rentedCar.manufacturer}
                        <Text as="span"
                            textTransform="capitalize"
                        >
                            {` ${rentedCar.model}`}
                        </Text>
                    </Text>
                    )}
                    <Text>
                        Order ends
                    </Text>
                    <Box display="flex">
                        <Text>12<Text as="span">h</Text></Text>
                        <Text>00<Text as="span">m</Text></Text>
                    </Box>
                </Box>
            </GridItem>
            
            
            
            
        </Grid>
  )
}

export default RentedCar