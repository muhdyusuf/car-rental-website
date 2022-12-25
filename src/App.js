import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import Car from "./pages/car/Car";
import Navbar from "./components/Navbar";

import "./utils/app.css"
import User from "./pages/user/User";
import NotFound from "./pages/notFound/NotFound";
import Rent from "./pages/rent/Rent";
import Login from "./pages/login/Login";
import SignUp from "./signUp/SignUp";



function App() {
  return (
    <div className="App">
      <carContext>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rent' element={<Rent/>}/>
          <Route path='/user/:userId' element={<User/>}/>
          <Route 
            path="/car/:carId"
            element={<Car/>}
            />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>          
        </Routes>
        
        <Navbar/>
      </ChakraProvider>
      </carContext>
    </div>
  );
}

export default App;
