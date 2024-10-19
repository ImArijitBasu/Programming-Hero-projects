import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks , setTasks] = useState([]);

  useEffect(()=>{
    const stored = localStorage.getItem('tasks');
    if(stored) {
      setTasks(JSON.parse(stored))
    }
  },[])
  useEffect(()=>{
    if(tasks.length > 0){
      localStorage.setItem('tasks' , JSON.stringify(tasks));
    }
  } , [tasks])
  const add = (newTask) =>{
    if(newTask.trim()){
      const update = [...tasks , newTask];
      setTasks(update)
      
    }
  }
  const delation = (index) => {
    const updated = tasks.filter((_,i) => i !== index)
    setTasks(updated)
  }

  return (
    <>
      
    </>
  )
}

export default App
