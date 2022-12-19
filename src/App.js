import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import Car from "./pages/car/Car";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"car",
    element:<Car/>
  }
]);

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
