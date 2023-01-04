import { Box, Button, Container, Image, Link } from '@chakra-ui/react'
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {Link as RouterLink} from 'react-router-dom'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:true,
        autoplaySpeed:6000,
        background:"transparent",
     
      }
  return (
   

    <Slider 
        {...settings}
        
    >
        <Box
            width="100%"
            height="auto"
            sx={{
                aspectRatio:"3/2.5"
            }}
            borderRadius="md"
            position="relative"
            
        >
            <Image src='https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-jumbo.png?quality=75&auto=webp'
            objectFit="cover"
            boxSize="100%"
            objectPosition="center"
            />
            <Link 
                position="absolute"
                top="0"
                bottom={0}
                margin="auto"
                as={RouterLink}
                to="/cars"
            >
                hello buitch
            </Link>
        </Box>

        <Box
            width="100%"
            height="auto"
            sx={{
                aspectRatio:"3/2.5"
            }}
            borderRadius="md"
            
        >
            <Image src='https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-jumbo.png?quality=75&auto=webp'
            objectFit="cover"
            boxSize="100%"
            objectPosition="center"
            />
        </Box>

        <Box
            width="100%"
            height="auto"
            sx={{
                aspectRatio:"3/2.5"
            }}
            borderRadius="md"
            
        >
            <Image src='https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-jumbo.png?quality=75&auto=webp'
            objectFit="cover"
            boxSize="100%"
            objectPosition="center"
            />
        </Box>
     
        
        
    </Slider>


  )
}

export default Carousel