// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts:{
    heading:`"Bebas Neue"`,
   
  }
}

// 3. extend the theme
const themes = extendTheme(config)

export default themes