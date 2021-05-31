import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCartItem } from '../../ReduxStore/Action/CartAction';

const ShoppingCartLeft = (props) => {
    const { image, title, price, quantity } = props.cart;

    const dispatch = useDispatch();

    const quantityHandaler = (type) => {
        if (type === "increment") {
            dispatch(editCartItem('increment', props.cart));
        }
        else if (quantity > 1) {
            dispatch(editCartItem('decrement', props.cart))
        }
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
                <h5 className="col-3">BDT {quantity * price}</h5>

            </div>
            <hr />
        </>
    );
};

export default ShoppingCartLeft;