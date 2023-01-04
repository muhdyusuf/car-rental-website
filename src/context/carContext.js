import React,{useEffect} from "react";
import { collection, doc, getDocs, query } from "firebase/firestore";
import {createContext, useContext, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { getDoc } from "firebase/firestore";

const CarContext=createContext()

const useCarData=()=>useContext(CarContext)


const CarProvider = ({children}) => {

    const [cars,setCars]=useState([])

    async function getCars(){
      const q = query(collection(db, "cars"))
      let _cars=[]
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        _cars.push({id:doc.id,...doc.data()})
      });
  
      setCars(_cars)
  
    }
    

    async function getCar(carId){
        
        let car

        try {
            const docRef = doc(db, "cars",carId);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()){
                car={error:"id not exist"}
            }
            else if (docSnap.exists()) {
                car={id:docSnap.id,...docSnap.data()}
              }
            
        } catch (error) {
            car={error:error.message}
            
        }

    
    }



    useEffect(() => {
      getCars()
     
    }, [])
    





    const value={
      cars
    }

  return (
    <CarContext.Provider
        value={value}
    >
        {children}
    </CarContext.Provider>
  )
}
export {useCarData,CarProvider}
