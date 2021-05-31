import { ADD_PRODUCTS, PRODUCT_DETAIL } from "../ActionType/ActionType"

export const addProducts = products=>{
    return {
        type:ADD_PRODUCTS,
        payload:products
    }
}

export const productDetail = id=>{
    return {
        type:PRODUCT_DETAIL,
        payload:parseInt(id)
    }
}