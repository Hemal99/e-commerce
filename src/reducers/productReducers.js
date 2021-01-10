import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST } from "../constants/productConstants";

export const productListReducer =(state ={loading:true,products:[]}/*defualt state -meka nattan error ekak enwa*/,action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true}//here we send ajax to back end and waiting for response
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}//state eke tiyana products kiyana array ekata danne//products kiyanne redux store eke tiyana variable ekak methandi karann ebackend eken ganna data redux store ekata dana eka
        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;  //dont change state ,return the previouse state
    }
}



export const productDetailsReducer=(state={product:{},loading:true},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}//state eke tiyan product kiyana object ekata danne
        case PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;

    }
}