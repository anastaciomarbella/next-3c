"use client"
import React from "react"
import "./login.css"
import {registrer} from  "../../services/firebase/auth";
import {stack,TextField }from "@mui/material"

export default function Registrer() {
    
  const  [state,setState] = React.useState({ 
    email: "",
    password: ""
   
});

function onChange(event)  {
const value = event.target.value;
    const name = event.target.name;
    setState({
        ...state,
        [name]: value
   
    })
}
 
function onlogin(){
    //const email = state.email;
    //const password = state.password;

    const {email, password} =state;
const args = {
email,
password,
displayName
}

function registrer(params)
}
return (
        <div classname="container">

            <Form> onSubmit=(onRegistrer)
          <stack>
            direction="column"
            spacing ={1}
           sx ={{
           width: {
            "sm": "100%",
            "md": "50%",
            "lg":"25%",
            "xl": "300px",
           }
        }}
           </stack>
           </Form>
           <input 
           onChange={onChange} 
           value= {state.password} 
           placeholder="123456"
           type="password" />
           requerid

           <input 
            name="displayName"
            onChange={onChange}
            value={state.displayName}
            placeholder="Tu nombre"  
            type="password" />
           requerid
            <button>login</button>
       
            </Fora>
        </div>
    )
}
