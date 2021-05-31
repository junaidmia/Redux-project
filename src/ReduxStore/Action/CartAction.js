import { ADD_CART, EDIT_CART } from "../ActionType/ActionType"

// add item to cart
export const addItemToCart = item=>{
    
    return {
        type:ADD_CART,
        payload:item

    }
}

// edit cart
export const editCartItem = (type, item)=>{
    return {
        type:EDIT_CART,
        payload:{type, item}
    }
}