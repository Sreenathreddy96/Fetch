import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let[products,setProducts] = useState([]);

  let getProductsFromServer = async()=>{
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
    
    let JSOData =  await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };

  useEffect(()=>{
    getProductsFromServer();
  }, []);
  return (
    <div className="App">
      <button type = "button" onClick={()=>{
        getProductsFromServer();
      }}>Get products</button>
    <div className="productContainer">
    {products.map((ele,i)=>{
        return (
        <div className="productDiv">
          <img src = {ele.image} className= "productPic" title={ele.description}></img>
          <p>{ele.title}</p>
          <p>Price:₹{ele.price}</p>
        
        </div>
        );
      })} 
    

    </div>
      

      
    </div>
  );
}

export default App;
