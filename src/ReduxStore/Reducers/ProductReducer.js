import { ADD_PRODUCTS } from "../ActionType/ActionType";

const initialState = [];

export const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCTS:
            const newProducts = action.payload.map(product=>({...product, quantity:1}));
            return [...state, ...newProducts]
        default:
            return state;
    }
}