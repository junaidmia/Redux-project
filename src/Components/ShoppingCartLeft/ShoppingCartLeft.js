import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItem, editCartItem } from '../../ReduxStore/Action/CartAction';

const ShoppingCartLeft = (props) => {
    const { id, image, title, price, quantity } = props.cart;

    const dispatch = useDispatch();

    const quantityHandaler = (type) => {
        if (type === "increment") {
            dispatch(editCartItem('increment', props.cart));
        }
        else if (quantity > 1) {
            dispatch(editCartItem('decrement', props.cart))
        }
    }


    // delete a cart
    const deleteCartHandaler = (id)=>{
        
        dispatch(deleteCartItem(id))
    }

    return (
        <>
            <div className="d-flex p-3">
                <div className="col-4">
                    <img style={{ width: "50px", height: "50px" }} src={image} alt="" />
                    <h6 className="mt-3">
                        {title}
                    </h6>
                </div>
                <h5 className="col-3">BDT {price}</h5>
                <div className="col-3 d-flex  align-items-center">
                    <button onClick={() => { quantityHandaler("decrement") }} className="btn btn-primary">-</button>
                    <div className="p-3">{quantity}</div>
                    <button onClick={() => { quantityHandaler("increment") }} className="btn btn-primary">+</button>
                </div>
                <h5 className="col-2">BDT {Math.round(quantity * price)}</h5>
                <div className=" d-flex align-items-center col-1">
                    <button onClick={()=>deleteCartHandaler(id)} className="p-0 m-0 btn">X</button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default ShoppingCartLeft;