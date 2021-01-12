import  thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {productListReducer /**warahan danne meka default export eke neme nm function ekak nm (./reducers/productReducers meke ekakta wada ewa export wenwa nm )  */} from './reducers/productReducers';
import {productDetailsReducer} from './reducers/productReducers'; 
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';


const initialState={
    userSignin:{
        userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
    },
    cart:{
        cartItems:localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
    } 

}

//reducer is a function that accepts two parameters state and action and returns new state
const reducer=combineReducers({//compine reducer eka parameter ekak widiyta object ekak gannawa e object eken tamai reducers la store ekata introduce karanne
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 //createStore() accepts  parameters reducer and initialState
const store =createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

//redux -thunk make it possible to send ajax request for our redux actions



export default store;

//3.08

