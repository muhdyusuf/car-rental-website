import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        background:"transparent"
        
      }
  return (
    <Container
        p="0"
    >    
        <Box>
            <Slider 
                {...settings}
                
            >
                <Box

                    width="100%"
                    height="auto"
                    sx={{
                        aspectRatio:"3/2.5"
                    }}
                    bg="teal.500"
                    borderRadius="md"
                   
                />
                 <Box

                    width="100%"
                    height="auto"
                    sx={{
                        aspectRatio:"3/2.5"
                    }}
                    bg="red.500"
                    borderRadius="md"
                   
                />
                 <Box

                    width="100%"
                    height="auto"
                    sx={{
                        aspectRatio:"3/2.5"
                    }}
                    bg="telegram.500"
                    borderRadius="md"
                   
                />
              
                
            </Slider>
        </Box>
    </Container>
  )
}

export default Carousel