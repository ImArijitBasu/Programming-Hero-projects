import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCart from "./Components/ProductCart/ProductCart";

function App() {
  const [isActive , setIsActive] = useState({
    cart: true
  })

  const handleStatus = (status) => {
    if(status == "cart"){
      setIsActive({
        cart: true
      })
    }

    else{
      setIsActive({
        cart : false
      })
    }
  }

  return (
    <>
      <ProductCart isActive={isActive} handleStatus={handleStatus}></ProductCart>
    </>
  );
}

export default App;
