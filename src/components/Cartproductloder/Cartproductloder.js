import { getShoppingCart } from "../../utilities/fakedb";


const Cartproductloder = async() => {
    const loadedproducts=await fetch('products.json')
const products=await loadedproducts.json();
// if cart data is in database , you 
const sortcart=getShoppingCart();
const saveCart=[];
console.log(sortcart)

for(const id in sortcart){
    const addedproduct=products.find(pd=>pd.id===id)
    if(addedproduct){
        const quantity=sortcart[id];
        addedproduct.quantity=quantity;
saveCart.push(addedproduct)
    }
}
return saveCart;
   
   
    
      
    
};

export default Cartproductloder;