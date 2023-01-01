import { Box, Button, Container, FormControl, Heading, Input,FormErrorMessage, FormLabel} from '@chakra-ui/react'
import React,{useRef} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object({
    name: yup.string().matches(/^[a-z ,.'-]+$/i).required(),
    address:yup.string().min(8).max(80).required(),
    phoneNumber:yup.string().matches(/^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/).required(),
    start:yup.date().required()
    
}).required();
  

const Rent = () => {
    const startRef=useRef()
    const endRef=useRef()

    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver:yupResolver(schema)
      });
    
    const onSubmit = data => console.log([data,errors]);

    return (
    <Container>
        {/* <p>{startRef.current}</p>
        <Input
             ref={startRef}
             placeholder="Select Date and Time"
             size="md"
             type="datetime-local"
        />
        <Input
            ref={endRef}
             placeholder="Select Date and Time"
             size="md"
             type="datetime-local"
        />
        <Button
            onClick={onSubmit}
        >see</Button> */}

        <Box>
            <Heading as="h3">
                Customer Detail
            </Heading>

            
        </Box>

        <form onSubmit={handleSubmit((e)=>onSubmit(e))}>
            <FormControl
                isInvalid={errors.name}
            >
                <FormLabel>
                    Name
                </FormLabel>
                <Input 
                    type="text" 
                    placeholder="Phone Number" 
                    {...register("name")}
                />

                {errors.name && (<FormErrorMessage mt="1px" fontSize=".8rem">
                    {errors.name.message}
                </FormErrorMessage>)}
            </FormControl>

            <FormControl
                isInvalid={errors.phoneNumber}
            >   
                <FormLabel>
                    Phone Number
                </FormLabel>
                <Input 
                    type="text" 
                    placeholder="eg : 01234567890" 
                    {...register("phoneNumber")}
                />

                {errors.phoneNumber && (<FormErrorMessage mt="1px" fontSize=".8rem">
                    {errors.phoneNumber.message}
                </FormErrorMessage>)}
            </FormControl>

            <FormControl
                isInvalid={errors.address}
            >
                <FormLabel>
                    Address
                </FormLabel>
                <Input 
                    type="text" 
                    placeholder="Address" 
                    {...register("address")}
                />

                {errors.address && (<FormErrorMessage mt="1px" fontSize=".8rem">
                    {errors.address.message}
                </FormErrorMessage>)}
            </FormControl>
            <FormControl
                isInvalid={errors.start}
            >
                <FormLabel>
                    Select Date
                </FormLabel>
                <Input 
                    type="datetime-local" 
                    placeholder="insert date" 
                    {...register("start")}
                />

                {errors.start && (<FormErrorMessage mt="1px" fontSize=".8rem">
                    {errors.start.message}
                </FormErrorMessage>)}
            </FormControl>
            
            <Button type="submit" >
                Submit 
            </Button>
        </form>
    </Container>
  )
}

export default Rent