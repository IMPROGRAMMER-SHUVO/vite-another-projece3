

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({cart,handleclaarcart,children}) => {
    console.log(cart)
    let total=0;
    let totalshipping=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1;
        }
        product.quantity=product.quantity ||1;
total=total+product.price*product.quantity 
totalshipping=totalshipping+product.shipping
 quantity=quantity+product.quantity;
}
 const tax =total*7/100


 const grandtotal=totalshipping+totalshipping+tax
  // const cart=props.cart; option 1
   // const {cart}=props; option 2
   //
    return (
        <div className='cart'>
            <h5 className='h5tag'>Order here</h5>
                <p>selected Item:{quantity}</p>
        <p> Total price:${total}</p>
        <p> Total shipping:${totalshipping}</p>
        <p> tax :${tax}</p>
        ______________________________________________
        <h4> total:${grandtotal.toFixed(2)} </h4>
        <button onClick={handleclaarcart} className='btnclear'>
           <span>Clear cart</span>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
        {children}
        </div>
    );
};
export default Cart;