import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const { id, image, price, title,} = props.productsInfo

    return (
        <div className="col-md-3 p-2">
            <div>
                <div class="card shadow p-3 mb-5 bg-body rounded">

                    <div className="text-center mb-3 mt-3" style={{ width: "30%", margin: '0 auto' }} >
                        <img src={image} class="card-img-top" alt="..." />
                    </div>

                    <div class="card-body">

                        <div style={{ borderRadius: "5px", backgroundColor: "#edeef0", padding: "5px" }}>

                            <div className="text-center mt-3 mb-3">
                                <h5 class="card-title">{title}</h5>
                            </div>

                            <div className="text-center mt-3 mb-3">
                                <h6>Price {price}</h6>
                            </div>

                            <div className="text-center">
                                <Link to={"/addToCart/"+id}>
                                    <button className="btn btn-warning m-2"> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                                </Link>
                                
                                <Link to={"/productDetails/"+id}>
                                    <button className="btn btn-warning m-2">View Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;