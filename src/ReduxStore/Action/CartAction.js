import { ADD_CART } from "../ActionType/ActionType"

// add item to cart
export const addItemToCart = item=>{
    
    return {
        type:ADD_CART,
        payload:item

    }
}