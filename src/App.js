import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, {useState} from 'react'



function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone IOS Max",
      quanitity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note IOS Max",
      quanitity: 0,
    }
  ]
  let [newproductList , setProductList ] = useState(productList)
  

  const IncrementQuanitity =(index)=>  {
    let newProductList = [...productList]
    newProductList[index].quanitity++
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList productList={newproductList }  IncrementQuanitity={IncrementQuanitity}  />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
