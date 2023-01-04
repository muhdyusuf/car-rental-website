import { Box, Button, Container, Divider, Grid, GridItem, Heading,Menu,MenuButton,MenuItem,MenuList} from '@chakra-ui/react'
import React, { useState } from 'react'
import CarList from '../../components/CarList'
import Filter from './Filter'

import {TbSortAscending} from 'react-icons/tb'
import { useCarData } from '../../context/carContext'

const Cars = () => {

  const {cars}=useCarData()

  const [filter,setFilter]=useState({
    all:true,
    available:false,
    unavailable:false,
  })

  
  
  function getfilteredCars(){
    let filterVal
    Object.keys(filter).map(key=>{
      if(filter[key]){
        filterVal=key
      }
    })

    let _cars

    switch (filterVal) {
      case "all":
        _cars=cars
        break;
      case "available":
        _cars=cars.filter(car=>!car.isRented)
        break;
        case "unavailable":
        _cars=cars.filter(car=>car.isRented)
        break;
      default:
        _cars=cars
        break;
    }

    return (_cars)
  }

  const filteredCars=getfilteredCars()

  



  return (
    <Box p="1rem">
      <Heading>
        Discover car
      </Heading>
      <Grid 
        w="100%"
        templateColumns="1fr 50px"
        
      >
        <GridItem overflow="scroll">
          <Filter filter={filter} setFilter={setFilter}/>
        </GridItem>
        <GridItem 
           display="flex"
           justifyContent="flex-end"
           alignItems="center"
           maxW="100%"
        >
        
          <Menu >
            <MenuButton 
              display="flex"
              justifyContent="center"
              alignItems="center"
              as={Button} 
              bg="transparent"
              fontSize="2rem"
              p="0"
             
            >
              {<TbSortAscending margin="auto"/>}
            </MenuButton>
            <MenuList>
              <MenuItem>Rate</MenuItem>
              <MenuItem>Rate</MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
      <CarList carList={filteredCars}/>
    </Box>
  )
}

export default Cars