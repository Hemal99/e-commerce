import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
   const dispatch = useDispatch(); 
   const productId =props.match.params.id;
   // const product = data.products.find((x)=>x._id === props.match.params.id);//array.find(function(currentValue, index, arr),thisValue) ->The find() method returns the value of the first element in an array that pass a test (provided as a function)
   const productDetails=useSelector(state => state.productDetails);
   const {loading,error,product} =productDetails;

   useEffect(() => {
        dispatch(detailsProduct(productId));
   },[dispatch,productId])
 
    return (
        <div>
        { loading?(<LoadingBox></LoadingBox>)
        :error?(<MessageBox variant="danger">{error}</MessageBox>)
        :(
            <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className='col-2'>
                    <img className='large' src={product.image} alt={product.name}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}>
                            </Rating>
                        </li>
                        <li>
                            <h1>${product.price}</h1>
                        </li>
                        <li>
                            description
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                   <div className="card card-body">
                        <ul>
                            <li>
                                <div className='row'>
                                   <div>Price</div>
                                   <div className="price">${product.price}</div> 
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                   <div>Status</div>
                                   <div >{product.countInStock>0 ?<span className="success">In stock</span>:
                                    (<span className="error">Unavailable</span>)
                                   }</div> 
                                </div>
                            </li>
                            <li>
                                <button className="primary block">
                                   Add to Cart
                                </button>
                            </li>
                        </ul>
                    </div> 
                </div>



            </div>
        </div>
        )
        }
    
      </div> 

        
    )
}
