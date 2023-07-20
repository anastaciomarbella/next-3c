function registrer(params)

return (
        <div classname="container">

            <Fora> onSubmit=(onRegistrer)
            <input onChange={onChange} value= {state.email} placeholder="email"type="text" />
            <input 
           onChange={onChange} 
           value= {state.email} 
           placeholder="123456"
           type="email" />
           requerid
           
           
           
           
           
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
