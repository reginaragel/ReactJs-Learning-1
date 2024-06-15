import React from "react";
import useInput from "./hook/useInput";

function UserForm(){

    const [firstName,bindfirstName,resetfirstName]=useInput('')
    const [secondName,bindsecondName,resetsecondName]=useInput('')

    const submitHandler=e=>{
        e.preventDefault()
        alert(` Hello ${firstName} ${secondName}`)
        resetfirstName()
        resetsecondName()
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FirstName</label>
                    <input {...bindfirstName} type="text"/>
                </div>
                <div>
                    <label>SecondName</label>
                    <input {...bindsecondName} type="text"/>
                </div>
                <button>SUBMIT</button>
            </form>
            

        </div>
    )
}

export default UserForm