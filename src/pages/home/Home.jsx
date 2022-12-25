import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'

import { collection, query, where, getDocs } from "firebase/firestore";
import { Container, Heading,Box, Divider } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import CarList from '../../components/CarList';
import Carousel from '../../components/Carousel';


const Home = () => {
  
  return (
    <Container py="1rem">
      <Heading as="h1">
        Sandakan <br></br> Car Rental
      </Heading>
      <Carousel/>
      <Divider/>
      <Box>
        <Heading 
        
        >
          Featured
        </Heading>
        <CarList/>
      </Box>
      
      <input type="file" name="" id="" />
    </Container>
  )
}

export default Home