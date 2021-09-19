import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
function App() {
  return (
    <div className = 'App'>
      {/* <Counter /> */}
      <ExternalUsers />
    </div>
  )
}
const counterStyle = {
  position:'absolute',
  top:'50%',
  left:'50%'
  
}

function ExternalUsers(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  const  UserStyle = {
    background:'aqua',
    border : '2px golden'
  }
  return(
    <div>
      <h3 className = 'gradient-text'>External Users</h3>
      {
        users.map(user => {
          return (
           <User name = {user.name} email = {user.email}></User>
          )
        })
      }
    </div>
  )
}
function User(props){
  return(
    
    <div>
      <h3>name : {props.name}</h3>
      <p>email : {props.email}</p>
    </div>
  )
}


function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount)
  }
  const handleDecrease = () =>{
    const newCount = count - 1;
    if(newCount < 0){
      return;
    }
    setCount(newCount)
  }
  return(
    <div
    >
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDecrease}>Increase</button>
    </div>
  )
}

export default App
