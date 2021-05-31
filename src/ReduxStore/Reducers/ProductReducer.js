import { ADD_CART, ADD_PRODUCTS, PRODUCT_DETAIL } from "../ActionType/ActionType";

const initialState = {
    products:[],
    eachProduct:{},
   
};

export const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case PRODUCT_DETAIL:
            return { ...state,  eachProduct:state.products.find(product=>product.id===action.payload)}
        case ADD_PRODUCTS:
            const newProducts = action.payload.map(product=>({...product, quantity:1}));
            return {...state, products:[...state.products, ...newProducts]}
        default:
            return state;
    }
}