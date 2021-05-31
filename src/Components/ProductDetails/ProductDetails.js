import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [id])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5 pt-5">
            <div class="row justify-content-around">
                <div class="col-md-4">
                    <p> <strong>Name :</strong> {productDetails.title} </p>
                    <p> <strong>Description:</strong> {productDetails.description} </p>
                    <p> <strong>Price :</strong> {productDetails.price} </p>
                    <p> <strong>Category :</strong> {productDetails.category} </p>
                    <button className="btn btn-warning mt-4"> <FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
                </div>
                <div class="col-md-4"> 
                    <img style={{ height:'200px'}} src={productDetails.image} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;