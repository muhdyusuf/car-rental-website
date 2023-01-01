import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Grid,
    
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useAuth } from '../../context/authContext'



const ConfirmationModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate=useNavigate()
    
    const {user}=useAuth()
    function handleOpen(){
      if(user){
        onOpen()
      }
      else{
        navigate("/login")
      }
    }

  return (
    <>
    <Box 
      onClick={handleOpen}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
    >
      <Text marginRight="1.5" fontSize="1.2rem">
        Check
      </Text>
      <AiOutlineArrowRight fontSize="1.5rem"/>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose} 
        size="full"
        
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Check Availability</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
            <Text as="p">
                user will be navigate to whatsapp in order to check selected vehicle availability
            </Text>

        </ModalBody>

        <ModalFooter>
          <Button 
            colorScheme='whatsapp'
            h="50px"
            >
            
            <a href="https://api.whatsapp.com/send?phone=123213214&text=my%20name%20is%20timulak">Navigate to whatsapp</a>
             
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default ConfirmationModal