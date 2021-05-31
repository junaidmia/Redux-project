import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../../ReduxStore/Action/ProductAction';

const Products = () => {

    // const [products, setProducts] = useState([])


    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    const { products } = useSelector(store=>store.allProduct);

   const dispatch =  useDispatch()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>dispatch(addProducts(data)));
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
                    products.map(productsInfo => <ProductCard key={Math.random()} productsInfo={productsInfo}> </ProductCard>)
                }
            </div>

        </div>
    );
};

export default Products;