import  thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import data from './data'

const initialState={}

//reducer is a function that accepts two parameters state and action and returns new state
const reducer=(state,action)=>{
    return {products:data.products}
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 //createStore() accepts  parameters reducer and initialState
const store =createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

//redux -thunk make it possible to send ajax request for our redux actions



export default store;

