import { Container, GridItem,Grid } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect} from 'react'
import { query,collection,getDocs } from 'firebase/firestore'
import {db} from '.././utils/firebaseConfig'
import CarCard from './CarCard'
import {v4 as uuidv4} from 'uuid'


const CarList = () => {
    const [availableCar,setAvailableCar]=useState([])

  async function getCars(){
    const q = query(collection(db, "cars"))
    let cars=[]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cars.push({id:doc.id,...doc.data()})
    });

    setAvailableCar(cars)

  }

  useEffect(()=>{
   getCars()
    return ()=>{

    }
  },[])
  return (
    <Container p="4">
        <Grid
            templateColumns="1fr"
            gap="1rem"
        >
            {availableCar.map(car=>{
            return(
                <GridItem key={uuidv4()} >
                    <CarCard car={car}/>
                </GridItem>
            )})}
        </Grid>
    </Container>
  )
}

export default CarList