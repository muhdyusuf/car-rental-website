import { Box, Container, Grid, Heading} from '@chakra-ui/react'
import React from 'react'
import CarList from '../../components/CarList'

const Cars = () => {
  const filterButtonStyle={
    height:"30px",
    padding:"0 1rem",
    display:"grid",
    placeContent:"center",
    borderRadius:"1rem",
    margin:"0 .2rem",
    bg:"blue.300"
  }



  return (
    <Box p="1rem">
      <Heading>
        Discover car
      </Heading>
      <Box
        width="100vw"
        display="flex"
        alignItems="flex-start"
        padding="0.5rem 1rem 0 1rem"
      >
        <Box 
          sx={filterButtonStyle}
        >dsfsdf
        </Box>
        <Box 
          sx={filterButtonStyle}
        >All
        </Box>
        <Box 
          sx={filterButtonStyle}
        >All
        </Box>
        <Box 
          sx={filterButtonStyle}
        >All
        </Box>
      </Box>
      <CarList/>
    </Box>
  )
}

export default Cars