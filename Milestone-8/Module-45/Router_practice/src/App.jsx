import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Stat from './Components/Stat/Stat'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='container mx-auto'>
    <Navbar></Navbar>
    <Stat></Stat>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
