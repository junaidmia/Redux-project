import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">

            <div className="d-flex justify-content-center mt-3 mb-3">
                <div style={{ width: "50%" }}>
                    <form class="d-flex">
                        <input class="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn" type="submit"> <FontAwesomeIcon icon={faSearch} /> </button>
                    </form>
                </div>
            </div>

            <div className="row pt-2 mt-2">
                {
                    products.map(productsInfo => <ProductCard productsInfo={productsInfo}> </ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;