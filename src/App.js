import React,{useState} from "react";
import "./styles.css";

export default function App() {
const[cart,setCart] = useState([]);
const [products] = useState([
{
   name:"AA Battery",
   cost: "$2.99",
   image: "https://webobjects2.cdw.com/is/image/CDW/5499073?$product-main$"
},
{
     name:"Blanket",
     cost: "$19.99",

     image:"https://images-na.ssl-images-amazon.com/images/I/614T7BVc5NL._AC_SL1500_.jpg"

}
]);
const addToCart=(product) => {
console.log("We are in add to cart")
 setCart([...cart,product])
}
  return (
    <div className="App">
      <header><button>Go to Cart({cart.length})</button></header>
      <h1>Products</h1>
      <div className = "products"> 
      {products.map((product,index)=>(
        <div  className = "product" key = {index}>
     <h3>{product.name}</h3>
     <h4>{product.cost}</h4>
  <img src={product.image} alt = {product.name}/>
<button onClick = {  () => addToCart(product)}>Add to  Cart</button>
      </div>
      
      ) )}
</div>
</div>
  );
      }
  
       
      

      
  
      
     
    
