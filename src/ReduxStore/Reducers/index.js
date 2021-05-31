import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { productReducer } from "./ProductReducer";


export const rootReducer = combineReducers({
    allProduct:productReducer,
    allCart:cartReducer
})