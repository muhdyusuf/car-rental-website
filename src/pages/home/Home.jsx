import React, { useEffect, useState } from 'react'
import CarCard from '../../components/CarCard'
import {db} from '../../utils/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";


const Home = () => {
  const [availableCar,setAvailableCar]=useState([])

  async function getCars(){
    const q = query(collection(db, "cars"))
    let cars=[]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cars.push({id:doc.id,...doc.data()})
    });

    setAvailableCar(cars)

  }

  useEffect(()=>{
   getCars()
    return ()=>{

    }
  },[])
  return (
    <div>
      {availableCar.map(car=><CarCard car={car}/>)}
    </div>
  )
}

export default Home