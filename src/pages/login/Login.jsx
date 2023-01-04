import { InputGroup,InputRightElement,Button, Center, Container, Input,Card, FormControl, Box, CardHeader, Heading, Text, FormErrorMessage} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
}).required();
  

export default function Login() {
  const { register, handleSubmit, formState: { errors} } = useForm({
    resolver:yupResolver(schema)
  });
 

  const [loading,setLoading]=useState(false)
  const [show,setShow]=useState(false)

  const {signUp}=useAuth()

   const onSubmit = async data =>{
    if(errors)return

    console.log(data)
    
  };
  
  return (
    <Container
        h="calc(100vh - 60px)"
        w="100%"
    
        
    >
        <Center
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            
            >
            <Card
                w="100%"
                p="1rem"
            >
                <CardHeader
                    p="0"
                    m="0 0 2rem 0"
                >
                    <Heading>
                        Log In
                    </Heading>
                </CardHeader>
                <form onSubmit={handleSubmit((e)=>onSubmit(e))}
            
                >   
                    <FormControl
                        isInvalid={errors.email}
                    >
                        <Input 
                            type="text" 
                            placeholder="Email" 
                            {...register("email")}
                        />

                        {errors.email && (<FormErrorMessage mt="1px" fontSize=".8rem">
                            {errors.email.message}
                        </FormErrorMessage>)}
                    </FormControl>
                    <FormControl
                        my=".5rem"
                        isInvalid={errors.password}
                    >
                        <InputGroup
                        >
                            <Input 
                                type={show?"text":"password"} 
                                placeholder="Password" 
                                {...register("password")} 
                            />
                            <InputRightElement width='4.5rem'>
                                <Button  size='sm'
                                    onClick={()=>setShow(show=>!show)}
                                >
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage mt="1px" fontSize=".8rem">
                            Use 8 or more characters with a mix of 
                            letters, numbers & symbols
                        </FormErrorMessage>

                    </FormControl>

                    <Button 
                        mt=".5rem"
                        w="100%"
                        colorScheme="yellow"
                        bg="yellow.300"
                        type="submit" 
                        border=".2rem solid black"
                        onClick={onSubmit}
                        disabled={loading}
                        
                    >
                        Sign Up
                    </Button>

                </form>
            </Card>
            <Text mt="1rem">
                Don't have an Account ? <Link
                 to="/signup" style={{color:"blue"}}>Sign Up</Link>
            </Text>
        </Center>


    </Container>
    
  );
}