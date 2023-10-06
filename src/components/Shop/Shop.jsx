import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products,setProduct]=useState([])
    const [cart,setCart]=useState([])
    
    useEffect(()=>{
       fetch('products.json') 
       .then(Response=>Response.json())
       .then(data=>setProduct(data))
    },[])

useEffect (()=>{

const storedCart=getShoppingCart();
const saveCart=[];
for(const id in storedCart){
const adddProduct=products.find(product=>product.id===id)
if(adddProduct){
const quantity=storedCart[id];
adddProduct.quantity=quantity
saveCart.push(adddProduct)


}
setCart(saveCart)
// console.log( 'stie',adddProduct)
}

},[products])





//     useEffect(()=>{
       
//     const storedCart=getShoppingCart()
//     //step1: get in
//   for(const id in storedCart)
// {
//     //step2:get the product by using id
// const saveProduct=products.find(product=>product.id===id)
// console.log(saveProduct)
// //step3: get quantity of the product
// const quanity=storedCart[id];
// saveProduct.quanity=quanity
// console.log(saveProduct)
// }
//     },[products])

    const handleaddtocard=(product)=>{

let newcart=[];
const exists=cart.find(pd=>pd.id===product.id);
if(!exists){
    product.quantity=1;
    const newcart=[...cart,product]
}
else{
    exists.quantity=exists.quantity+1;
    const remaining=cart.filter(pd=>pd.id !== product.id)
 newcart=[...remaining,exists]
}


      




setCart(newcart);
        addToDb(product.id)

       }
    return (
        <div className="shop-container">
            <div className="product-conatiner">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}

handleaddtocard={handleaddtocard}
                    > </Product> )
                }
            </div>
            <div className="cart-conatainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;