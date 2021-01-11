import { CART_ADD_ITEM } from "../constants/cartConstant";

export const cartReducer =(state={ cartItems:[]},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item =action.payload;
            const existItem=state.cartItems.find((x)=>x.product === item.product);//Returns the array element value if any of the elements in the array pass the test, otherwise it returns undefined
            if(existItem){//find eken return wenne value ekak metanadi object ekak object eka null natham me if eka run wenwa
                return{
                    ...state,
                    cartItems:state.cartItems.map((x)=>x.product === existItem.product?item:x)//[samana ewa tika wenama sub array ekakta gannwa] ekama item eka click kaloth eka increment karana eka
                }
            }else{
                return {...state,cartItems:[...state.cartItems,item]}//aluth item eka cartItems kiyana array eke antimata add wenwa
            }

        default:
            return state;
    }
}