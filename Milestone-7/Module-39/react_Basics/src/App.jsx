import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Products";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="contentBox">
          <Products></Products>
          <Products></Products>
          <Products></Products>
          <Products></Products>
      </div>
    </>
  );
}

export default App;
