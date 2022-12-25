import { Button, Center, Container, Input,Card, FormControl, Box, CardHeader, Heading, InputGroup,InputRightElement,Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const [loading,setLoading]=useState(false)

  const [show,setShow]=useState(false)
  
  
  return (
    <Container
        h="calc(100vh - 60px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
    >
        <Center
            display="flex"
            flexDirection="column"
            w="100%"
        >
            <Card
                p="1rem"
                width="100%"
            >
                <CardHeader
                    p="0"
                    m="0 0 2rem 0"
                >
                    <Heading>
                        Log In
                    </Heading>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}
            
                >
                    <Input 
                        type="text" 
                        placeholder="Email" 
                        {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                    />

                    <InputGroup
                        my=".5rem"
                    >
                        <Input 
                            type={show?"text":"password"} 
                            placeholder="Password" 
                            {...register("Password", {required:true,max: 20, min: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i})} 
                        />
                        <InputRightElement width='4.5rem'>
                            <Button  size='sm' onClick={()=>setShow(show=>!show)}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>


                    <Box 
                        mt="1rem"
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Button 
                            colorScheme="telegram"
                            type="submit" 
                            onClick={onSubmit}
                            disabled={loading}
                            
                        >
                            Sign Up
                        </Button>
                    </Box>
                </form>
            </Card>
            <Text mt="1rem">
                    Don't have an account ? <Link
                    to="/signup" style={{color:"blue"}}>Sign Up</Link>
            </Text>
        </Center>
        
        



    </Container>
    
  );
}