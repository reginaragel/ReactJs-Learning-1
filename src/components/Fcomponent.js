import React,{useContext} from "react";
import { UserContext } from "../App";

function Fcomponent(){

    const countContext=useContext(UserContext)
    return(
        <div>
            <div>Count-{count}</div>
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>


        </div>
    )
}

export default Fcomponent