import { doc } from "firebase/firestore";
import {createContext, useContext, useState } from "react";

const CarContext=createContext()

const useCarData=useContext(CarContext)


const carContext = ({children}) => {

    const [cars,setCars]=useState([])

    async function getCars(){
        const docRef = doc(db, "cars");
        const docSnap = await getDoc(docRef);
        
        
        if (docSnap.exists()) {
          setCars(docSnap.map(doc=>({
            id:doc.id,
            ...doc.data()
          })
        ))
        } else {
        
          console.log("No such document!");
        }
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
      
    
      return () => {
        
      }
    }, [])
    





    const value={}

  return (
    <CarContext.Provider
        value={value}
    >
        {children}
    </CarContext.Provider>
  )
}
export default carContext
