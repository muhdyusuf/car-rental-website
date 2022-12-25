import { InputGroup,InputRightElement,Button, Center, Container, Input,Card, FormControl, Box, CardHeader, Heading, Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const [loading,setLoading]=useState(false)
  const [show,setShow]=useState(false)
  
  
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
                        Sign Up
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

                    <Input type={show?"text":"password"} placeholder="ConfirmPassword" {...register("ConfirmPassword", {required:true,max: 20, min: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i})} />

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
                Already have an account ? <Link
                 to="/login" style={{color:"blue"}}>Login</Link>
            </Text>
        </Center>


    </Container>
    
  );
}