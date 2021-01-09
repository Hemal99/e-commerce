import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} =props; //destructure -extract product from props 
    return (
        <div key={product._id} /*map ekata passe ena palaweni element ekata key ekak one*/className="card">   
        <a href="product.html">
           <img className="medium" src={product.image} alt=""   />
         </a>
         <div className="card-body">
           <a href={`/product/${product._id}`}/**dynamic data dana hinda curly bracket danwa */>
             <h2>{product.name}</h2>
           </a>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
           <div className="price">${product.price}</div>
         </div>
       </div>
    )
}
