import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const[clock,setClock] = useState(new Date())
  useEffect(()=>{
   const interval = setInterval(()=>{
     setClock(new Date())
   },1000)
   return ()=>{
     clearInterval(interval)
   }
  },[clock])

  return (
    <div id="main">
      <div className="date-time">
        {clock.toLocaleTimeString()}
      </div>
    </div>
  )
}


export default App;
