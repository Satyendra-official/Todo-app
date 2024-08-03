import { useState } from 'react'
import './components/style.css';
import Todo from './components/todo';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Todo/>
      </div>
      
    </>
  )
}

export default App
