import { useState } from 'react'
import './App.css'
import Posts from './posts'









function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h3>React Recap Core Concepts</h3>
      <li>JSX</li>
      <li>Props</li>
      <li>State</li>
      <li>Event Handler</li>
      <li>Load data</li>
      <ol>
        <li>Components</li>

      </ol>
      <hr />
      <Posts></Posts>
     
      
      
    </>
  )
}

export default App
