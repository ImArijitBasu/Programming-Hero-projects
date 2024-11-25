import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Login from './Components/login.jsx'
import Register from './Components/Register.jsx'
import SignUp from './Components/SignUp.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Main></Main>,
    children : [
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/signUp",
        element : <SignUp></SignUp>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
