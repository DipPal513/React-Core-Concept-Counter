import React, { useState } from 'react'

function App() {
  return (
    <div className = 'App'>
      <Counter />
    </div>
  )
}


function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount)
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}

export default App
