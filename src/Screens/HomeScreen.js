import React, { useEffect, useState } from 'react';
import Product from '../components/Product'; 
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useSelector ,useDispatch} from 'react-redux';
import { listProducts } from '../actions/productAction';


export default function HomeScreen() {
/* const [products /**current state value eka ,setProducts/**setProducts kiyanne function ekak current state eka wenas karanna ona unama use karana eka this.sestate() wage ]  = useState([]); //reacthooks t manage state They let you use state and other React features without writing a class.
//useState is a Hook that lets you add React state to function components
//When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!
/* const [ loading,setLoading ] = useState(false);
const [ error,setError ] = useState(false);  */
//default error is false becuase there is no error at the moment
 
//redux store eken object ekak ganna useSelector() use karanwa

const dispatch = useDispatch(); //using this hook we can dispatch any redux action in redux our redux component
const productList =  useSelector(state =>state.productList);
const {loading,error,products}=productList //destructuring

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  dispatch(listProducts());
 
},[])
//useEffect eka componentDidMount() componentDidUpdate() function deke combine ekak componentsMount unata passe meka run wenwa
//useEffect() kiyana hook eka parameter dekaka gannawa palaweni eka function ekak ilaga eka array-(accepts list of dependencies) ekak
//array eka dammama dom eka render unata passe me hook eka run wenne eka parai


    return (
        <div>
          { loading?(<LoadingBox></LoadingBox>)
          :error?(<MessageBox variant="danger">{error}</MessageBox>)
          :(
            <div className="row center">
                {products.map((product)=>(
               <Product key={product._id} product={product} />))}
            </div>
          )
          }
      
        </div> 
    ) 
}
