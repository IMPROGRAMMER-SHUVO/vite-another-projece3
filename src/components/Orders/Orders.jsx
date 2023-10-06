
import { useLoaderData } from 'react-router-dom';

import './orders.css'
import Cart from '../Cart/Cart';

import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
  const savedcart=useLoaderData();
const [cart,setCart]=useState(savedcart)
  // console.log(savedcart)


const handleRemoveFormcart=(id)=>{
  const remaining=cart.filter(product=>product.id!==id)
setCart(remaining);
 removeFromDb (id)

}

 return(
  
        <div className="shop-container">
          <div  className="review-container">
          {
            cart.map(product=><ReviewItem
key={product.id}
product={product}
handleRemoveFormcart={handleRemoveFormcart}
            ></ReviewItem>)
          }
           
          </div>
          <div className="cart-conatainer">
          <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Orders;