import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const[clock,setClock] = useState(new Date())


 function updateTIme(){
   let time  =  new Date();
   setClock(time)
 }

  useEffect(()=>{
   const interval = setInterval(updateTIme,1000)
   return ()=>{
     clearInterval(interval)
   }
  })

  return (
    <div id="main">
      <div className="date-time">
        {clock.toLocaleString()}
      </div>
    </div>
  )
}


export default App;
