import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product'; 


export default function HomeScreen() {
const [products /**current state value eka */,setProducts/**setProducts kiyanne function ekak current state eka wenas karanna ona unama use karana eka this.sestate() wage */]  = useState([]); //reacthooks t manage state They let you use state and other React features without writing a class.
//useState is a Hook that lets you add React state to function components
//When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!


// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  const fetchData= async ()=>{
    const {data} = await axios.get('/api/products');
      console.log(data);                                         //data in backend will be transfer into frontend
    setProducts(data);//meka kalata passe [products] array eka backend eken ena products wla data store wenwaS
  };
  fetchData();
 
},[])
//useEffect eka componentDidMount() componentDidUpdate() function deke combine ekak componentsMount unata passe meka run wenwa
//useEffect() kiyana hook eka parameter dekaka gannawa palaweni eka function ekak ilaga eka array-(accepts list of dependencies) ekak
//array eka dammama dom eka render unata passe me hook eka run wenne eka parai


    return (
        <div className="row center">
          {
            products.map((product)=>(
             <Product key={product._id} product={product} />
            ))
          }
      
        </div> 
    ) 
}
