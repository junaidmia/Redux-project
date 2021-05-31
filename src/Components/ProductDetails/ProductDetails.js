import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../../ReduxStore/Action/ProductAction';

const ProductDetails = () => {

    // const [productDetails, setProductDetails] = useState([]);
    const { id } = useParams();

   

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProductDetails(data))
    // }, [id])

    const dispatch = useDispatch();
   const { eachProduct:productDetails } =  useSelector(store=>store.allProduct);

   useEffect(()=>{
    dispatch(productDetail(id));
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
                    <Link to={"/addToCart/"+id}>
                    <button className="btn btn-warning mt-4"> <FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
                    </Link>
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