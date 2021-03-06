
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../ReduxStore/Action/CartAction';
import { addProducts } from '../../ReduxStore/Action/ProductAction';
import ShoppingCartLeft from '../ShoppingCartLeft/ShoppingCartLeft';
import { useParams } from  'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import ShoppingCartRight from '../ShoppingCartRight/ShoppingCartRight';

const ShoppingCart = () => {

 const {id} =  useParams();

 

  const dispatch = useDispatch();

  const { products }  =  useSelector(store=>store.allProduct);
  const {allCart:carts} = useSelector(store=>store);
  
  useEffect(()=>{
    
    dispatch(addItemToCart(products.find(product=>product.id==id)))
      
  }, [])

   

  

   
    return (
      <div>
        <Navbar></Navbar>
       <div className="container mt-3">
           <div className="row">
               <div className="col-md-9">
                   <div className="d-flex justify-content-between">
                       <div className="col-3">Item</div>
                       <div className="col-3">Price</div>
                       <div className="col-3">Qty</div>
                       <div className="col-2">Subtotal</div>
                       <div className="col-1"></div>
                   </div>
                   <hr />
                   {
                     carts.length &&  carts.map(cart=><ShoppingCartLeft key={Math.random()} cart={cart}/>)
                   }
               </div>
               <div className="col-md-3">
                  <p className="h5">Summary</p>
                  <hr />
                  <ShoppingCartRight carts = {carts}/>
               </div>
           </div>
       </div>
       </div>
    );
};

export default ShoppingCart;