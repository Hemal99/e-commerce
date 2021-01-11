import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} =props; //destructure -extract product from props 
    return (
        <div key={product._id} /*map ekata passe ena palaweni element ekata key ekak one*/className="card">   
        <Link to={`/product/${product._id}`}>
           <img className="medium" src={product.image} alt=""   />
         </Link>
         <div className="card-body">
           <Link to={`/product/${product._id}`}/**dynamic data dana hinda curly bracket danwa */>
             <h2>{product.name}</h2>
           </Link>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
           <div className="price">${product.price}</div>
         </div>
       </div>
    )
}
