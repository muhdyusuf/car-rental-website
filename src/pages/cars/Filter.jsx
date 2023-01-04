import { Box, Button, Divider } from '@chakra-ui/react'
import React from 'react'
import { uuidv4 } from '@firebase/util'

const Filter = ({setFilter,filter}) => {
    function handleFilter(value){
        const _filter={...filter}
        Object.keys(_filter).map(key=>{
            _filter[key]=false
        })
        _filter[value]=true
        setFilter(_filter)
    }

  return (
    <Box
        width="100%"
        display="flex"
        flexWrap="nowrap"
        margin="1rem 0"
        position="relative"
        

    >
        {Object.keys(filter).map(key=>
            // <Button 
            //     key={key+uuidv4()}
            //     colorScheme={filter[key]?"blue":"gray"}
            //     bg={filter[key]?"blue.300":"gray.100"}
            //     onClick={()=>handleFilter(key)}
            // >
            //     {key}
            // </Button>
           filter[key]?(
            <Button 
                key={key+uuidv4()}
                colorScheme="blue"
                bg="blue.300"
                border="solid black .2rem"
                onClick={()=>handleFilter(key)}
                px="1rem"
                marginRight=".3rem"
                borderRadius="xl"
            >
                {key}
            </Button>

            ):(
                <Button 
                key={key+uuidv4()}
                colorScheme="gray"
                bg="gray.300"
                onClick={()=>handleFilter(key)}
                px="1rem"
                marginRight=".3rem"
                borderRadius="xl"
            >
                {key}
              </Button>
            )

        )}
        <Divider orientation='vertical' bg="gray.500"
            position="absolute"
            right={1}
        />
    </Box>
  )
}

export default Filter