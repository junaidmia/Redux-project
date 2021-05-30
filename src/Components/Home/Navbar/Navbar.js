import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid container">
                    <a class="navbar-brand" href="...">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto ">

                            <li class="nav-item ml-3">
                                <a class="nav-link active" aria-current="page" href="...">Home</a>
                            </li>

                            <li class="nav-item ms-3">
                                <a class="nav-link active " href="..."> <span style={{ padding: '8px', backgroundColor: "#E8E6E6", borderRadius: '5px' }}>

                                    <FontAwesomeIcon icon={faShoppingCart} /> <span class="badge bg-danger"> 0 </span></span>
                                </a>
                            </li>

                            <li class="nav-item ms-3">
                                <a class="nav-link active" href="...">Contact</a>
                            </li>

                            <li class="nav-item ms-3">
                                <a class="nav-link active" href="...">About</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;