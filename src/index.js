import { ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import reportWebVitals from './reportWebVitals';

import themes from "./utils/theme";
import "@fontsource/bebas-neue"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={themes}>
      <ColorModeProvider>
        <AuthProvider>          
          <App />
        </AuthProvider>
      </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
