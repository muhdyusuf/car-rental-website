import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import React,{useRef} from 'react'

const Rent = () => {
    const startRef=useRef()
    const endRef=useRef()
    
    function submitDate(){
        console.log([startRef.current.value,endRef.current.value])
    }

    return (
    <Container>
        <p>{startRef.current}</p>
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
            onClick={submitDate}
        >see</Button>

        <Box>
            <Heading as="h3">
                Customer Detail
            </Heading>
            
        </Box>
    </Container>
  )
}

export default Rent