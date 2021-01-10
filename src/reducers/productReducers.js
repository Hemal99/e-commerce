import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

const productListReducer =(state ={loading:true,products:[]}/*defualt state -meka nattan error ekak enwa*/,action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true}//here we send ajax to back end and waiting for response
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}//products kiyanne redux store eke tiyana variable ekak methandi karann ebackend eken ganna data redux store ekata dana eka
        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;  //dont change state ,return the previouse state
    }
}
export default productListReducer;