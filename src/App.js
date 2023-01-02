import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  redirect,
  useNavigate
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
import SignUp from "./pages/signUp/SignUp";

import { useAuth } from "./context/authContext";
import { async } from "q";
import { CarProvider } from "./context/carContext";
import Cars from "./pages/cars/Cars";


function App() {
  const navigate=useNavigate()
  const {user}=useAuth()

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  
  
  return (
    <div className="App">
      <CarProvider>
        <Routes>
          {/* {user && (<Route path='/user/:userId' element={<User/>}/>)} */}
          <Route 
            path='user' 
            element={<User/>}
            loader={()=> {
              console.log("ok")
              if(!user) {
                // if you know you can't render the route, you can
                // throw a redirect to stop executing code here,
                // sending the user to a new route
                throw redirect("/")
              }
          
            }}
          />
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/rent' element={<Rent/>}/> */}
      
          <Route 
            path="cars"
            element={<Cars/>}
          /> 
          <Route
                path="car/:carId"
                element={<Car/>}
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>          
        </Routes>
        
        <Navbar/>
      </CarProvider>
    </div>
  );
}

export default App;
