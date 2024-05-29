import React,{useEffect, useState} from "react";


function HookCounterOne(){

    const initialCount=0

    const [count,setCount] = useState(initialCount)
    const [name,setName] = useState('')

   useEffect(()=>{
       console.log('useffect-updating document title')
       document.title=`clicked ${count} times`

   },[count])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count + 1)}>CLicked {count} times</button>

        </div>
    )
}

export default HookCounterOne