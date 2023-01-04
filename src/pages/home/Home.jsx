import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'

import { collection, query, where, getDocs } from "firebase/firestore";
import { Container, Heading,Box, Divider, GridItem, Grid, Center } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import CarList from '../../components/CarList';
import Carousel from '../../components/Carousel';
import Benefit from '../../components/Benefit';
import Newsletter from '../../components/Newsletter';
import FAQ from '../../components/FAQ';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <Container p="1rem 0"  w="100vw">
      <Heading as="h1" lineHeight="3rem" fontSize={"6xl"}>
        Sandakan <br></br> Car Rental
      </Heading>
      <Box my="4rem">
         <Carousel/>
      </Box>
      <Grid
        rowGap="4rem"
        templateRows="1fr"
        placeContent="center"
        px={"1rem"}
      >
        

        <GridItem >
          <Heading 
          >
            Featured
          </Heading>
          <CarList/>
          <Center mt="1rem" textDecoration="underline">
            <Link to="/cars">
              see more
            </Link>
          </Center>

        </GridItem>

        <GridItem>
          <Heading as="h2" mb="3rem">
            Why rent with with us
          </Heading>
          <Benefit/>
        </GridItem>

        <GridItem>
          <Newsletter/>
        </GridItem>

        <GridItem>
          <Heading>
            Frequently asked question
          </Heading>
          <FAQ/>
        </GridItem>
      </Grid>  
        

      
    </Container>
  )
}

export default Home