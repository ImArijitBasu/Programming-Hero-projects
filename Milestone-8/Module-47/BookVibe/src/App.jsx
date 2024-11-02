import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen container mx-auto px-2">
        <Header></Header>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
