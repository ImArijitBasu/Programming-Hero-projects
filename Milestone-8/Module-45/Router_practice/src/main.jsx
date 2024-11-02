import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Accordion from './Components/Accordion/Accordion.jsx';
import Home from './Components/Home/Home.jsx';
import Items from './Components/Items/Items.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children : [
      {
        index : true,
        element : <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element : <Accordion></Accordion>,
      },
      {
        path : "/items",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element : <Items></Items>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
