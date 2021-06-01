import { ADD_CART, DELETE_CART, EDIT_CART } from "../ActionType/ActionType";

const initialState = []

export const cartReducer = (state=initialState, action)=>{
    
    switch (action.type) {
        case DELETE_CART:
            return state.filter(item=>item.id!==action.payload);
        case EDIT_CART:
           return action.payload.type==="increment"? state.map(item=>item.id==action.payload.item.id?{...item, quantity:item.quantity+1}:item):state.map(item=>item.id==action.payload.item.id?{...item, quantity:item.quantity-1}:item)
            
        case ADD_CART:
            return (state.length>0 && state.find(item=>item.id==action.payload.id)!= undefined)?state.map(item=>item.id==action.payload.id?{...item, quantity:item.quantity+1}:item):[...state, action.payload];
        default:
            return state;
    }
}