import { Box, Button, Container, FormControl, FormErrorMessage, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import React from 'react'

import {BiMailSend} from 'react-icons/bi'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object({
    email: yup.string().email().required(),
}).required();
  



const Newsletter = () => {
    
    const { register, handleSubmit, formState: { errors} } = useForm({
    resolver:yupResolver(schema)
      });

    function onSubmit(){

    }
  return (
    <Box 
        p=".5rem"
        boxShadow="md"
        w="100%"
        height="300px"
        border=".2rem solid black"
        borderRadius="2xl"
        bg="blue.300"
        display="flex"
        flexDirection="column"
        justifyContent="center"
     
    >
        <Grid templateColumns="2fr 1fr"
        >
            <GridItem
                display="flex"
                alignItems="center"
                paddingStart="1rem"
            >
                 <Text as="b" fontSize="1.5rem">
                    Subscribe for exclusive offers and deals!
                 </Text>
            </GridItem>
            <GridItem
                display="flex"
                alignItems="end"
            >
                <BiMailSend fontSize="6rem"/>
            </GridItem>
        </Grid>
        <form onSubmit={handleSubmit((e)=>onSubmit(e))}>
            <FormControl
                isInvalid={errors.email}
                my="1rem"
            >
                <Input 
                    type="text" 
                    placeholder="Email" 
                    bg="light"
                    {...register("email")}
                />

                {errors.email && (<FormErrorMessage mt="1px" fontSize=".8rem">
                    {errors.email.message}
                </FormErrorMessage>)}
            </FormControl>
            <Button type="submit" colorScheme="yellow" bg="yellow.300" w="100%"
            >
                Sign me up!
            </Button>
        </form>


    </Box>
  )
}

export default Newsletter