import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {allCart:carts} = useSelector(store=>store);

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid container">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <a class="navbar-brand">BeYou Garments</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                            <Link style={{textDecoration: 'none'}} to="/">
                                <li class="nav-item ml-3">
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </li>
                            </Link>

                           
                            <Link style={{textDecoration: 'none'}} to="/login">
                                <li class="nav-item ms-3">
                                    <a class="nav-link active">Log In</a>
                                </li>
                            </Link>

                            <Link style={{textDecoration: 'none'}} to="/addToCart">
                                <li class="nav-item ms-3">
                                   <a class="nav-link active "> <span style={{ padding: '8px', backgroundColor: "#E8E6E6", borderRadius: '5px' }}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span class="badge bg-danger"> { carts.length } </span></span>
                                    </a>
                                </li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;