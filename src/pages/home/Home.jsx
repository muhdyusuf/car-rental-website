import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'
import {db} from '../../utils/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Container } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';


const Home = () => {
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
    <Container p="0">
      <Navbar/>
      <div>
      {availableCar.map(car=><CarCard car={car}/>)}
    </div>
    </Container>
  )
}

export default Home