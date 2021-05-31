
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../ReduxStore/Action/CartAction';
import { addProducts } from '../../ReduxStore/Action/ProductAction';

import ShoppingCartLeft from '../ShoppingCartLeft/ShoppingCartLeft';

const ShoppingCart = () => {

  const dispatch = useDispatch();

  const { allProduct:products , allCart:carts}  =  useSelector(store=>store);
  
  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>dispatch(addProducts(data)))
    
    products.length && dispatch(addItemToCart(products[0]));
    
   
    
      
  }, [])

   

  

   
    return (
       <div className="container mt-3">
           <div className="row">
               <div className="col-md-8">
                   <div className="d-flex justify-content-between">
                       <div className="col-4">Item</div>
                       <div className="col-3">Price</div>
                       <div className="col-3">Qty</div>
                       <div className="col-2">Subtotal</div>
                   </div>
                   <hr />
                   {
                     products.length &&  products.map(cart=><ShoppingCartLeft key={Math.random()} cart={cart}/>)
                   }
               </div>
               <div className="col-md-4">
                  <p className="h5">Summary</p>
                  <hr />
               </div>
           </div>
       </div>
    );
};

export default ShoppingCart;