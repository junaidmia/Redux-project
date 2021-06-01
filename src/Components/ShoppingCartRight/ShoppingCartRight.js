import React from 'react';
import { Link } from 'react-router-dom';


const ShoppingCartRight = (props) => {

    const { carts } = props

    return (
        <div>
            {
                carts.length ?
                    (
                        <div>
                            <div className="h6">Estimate Shipping And Task</div>
                            <form>
                                <div className="mb3">
                                    <label htmlFor="" className="form-label">Country</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb3">
                                    <label htmlFor="" className="form-label">Address</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <div className="col-6">Subtotal</div>
                                    <div className="col-6">
                                        BDT {
                                            carts.reduce((sum, item)=> Math.round(item.quantity*item.price+sum) ,0)
                                        }
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="col-6">Tax</div>
                                    <div className="col-6">
                                        
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <div className="col-6">
                                       <div className="h4"> Order Total</div>
                                    </div>
                                    <div className="col-6">
                                       <div className="h4">
                                       BDT {
                                            carts.reduce((sum, item)=> Math.round(item.quantity*item.price+sum) ,0)
                                        }
                                       </div>
                                    </div>
                                </div>
                                <Link to="/checkout">
                                <button className="btn btn-success mt-4">Proceed To Checkout</button>
                                </Link>
                            </form>
                        </div>
                    )
                    :
                    (
                        <div className="h6">No Item added here.</div>
                    )
            }
        </div>
    );
};

export default ShoppingCartRight;