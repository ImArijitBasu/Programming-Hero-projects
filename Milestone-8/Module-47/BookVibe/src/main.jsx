import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import BookList from './Components/BookList/BookList.jsx'
import Home from './Components/Home/Home.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App></App>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/booklist",
        element : <BookList></BookList>,
        loader : () => fetch ('/booksData.json')
      },
      {
        path : "books/:bookId",
        element : <BookDetails></BookDetails>,
        loader : () => fetch('/booksData.json'),
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)