import React, { useState } from 'react';

const ShoppingCartLeft = (props) => {
    const { image, title, price, quantity } = props.cart;
    const [itemQuantity, setItemQuantity] = useState(quantity)

    const quantityHandaler = (type) => {
        type === "increase" ? setItemQuantity(itemQuantity+1) : setItemQuantity(itemQuantity+1);
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
                    <button className="btn btn-primary">-</button>
                    <div className="p-3">{itemQuantity}</div>
                    <button onClick={()=>{quantityHandaler("increase")}} className="btn btn-primary">+</button>
                </div>
                <h5 className="col-3">BDT {itemQuantity * price}</h5>

            </div>
            <hr />
        </>
    );
};

export default ShoppingCartLeft;