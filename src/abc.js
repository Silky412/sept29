import React, { useRef } from 'react'
import './abc.css';

export default function Abc() {
    const refval=useRef()
    const show=()=>{
        console.log(refval.current.value)
    }  
 
  return (
   
    
      <div>
         <div >hello</div>
         <input ref={refval} ></input>
          <button onClick={show}>show</button>
      </div>

  )
}
















   {/* <input onChange={(e)=>setName(e.target.value)} value={name} >

   </input>
   <button onClick={showName}>click</button> */}
//    const showName=()=>{
//     console.log(name)

// }