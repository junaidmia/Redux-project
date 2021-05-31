import { ADD_PRODUCTS } from "../ActionType/ActionType"

export const addProducts = products=>{
    return {
        type:ADD_PRODUCTS,
        payload:products
    }
}