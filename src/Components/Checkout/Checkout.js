import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const Checkout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{color:'green'}} className="text-center m-5 p-5">
            <h1 className="mt-5"> Your Order has been placed !! </h1>
            <h2 className="mt-5">Thank you for being with us &#128515; </h2>
            <Link to="/">
                <button className="btn btn-success mt-5">Back To Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Checkout;