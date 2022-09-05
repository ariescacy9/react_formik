
import React, { useState} from 'react'
import './Form.css';


function Form() {

  const [user, setUser] = useState({name:"", id:"", email: "", password:"", gender: "", datetime:"", description:""})
  const [errors, setErrors] = useState({})

  function validate(){
    let errors ={};
    if (!user.name || !/^[A-Z]+$/i.test(user.name)){
      errors.name = "datos no validos  vacios"
    }
    if (!user.id || !/^[1-9]+$/i.test(user.id)){
      errors.id = "id invalido"
    }
    if (!user.description){
      errors.description = "falta la descripcion"
    }
    return errors
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(user)
    if( !errors.hasOwnProperty("name") &&
    !errors.hasOwnProperty("id") &&
    !errors.hasOwnProperty("description")
    ){
      alert("usuario registrado")
      setUser({
        name:"",
        id:"",
        email: "",
        password:"",
        gender: "",
        datetime:"",
        description:""
      })
    } else {
      alert("debe compleatar todo los datos")
    }
  }

  function handleChange(e){
    e.preventDefault()
    setUser({ ...user, [e.target.name]: e.target.value})
    setErrors(validate({
      ...user, [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="Form">
        <label>Nmbre del usuario</label>
        <input
          placeholder='Nombres'
          type = 'text'
          autoComplete='off'
          value={user.name}
          name = 'name'
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.name && (<p>{errors.name}</p>)}

        <label>id del ususario</label>
        <input
          placeholder='id'
          type = 'number'
          autoComplete='off'
          value={user.id}
          name = 'id'
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.id && (<p>{errors.id}</p>)}

        <label>correo electronico</label>
        <input
          placeholder='Email'
          type = 'email'
          value={user.email}
          name = 'email'
          onChange={(e) => handleChange(e)}
          required
        />

        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={(e) => handleChange(e)} required/>

        <div className='Form__radio'>
          <label>Gender:</label>
          <input type="radio" name="gender"  value="male" /> Male<br/>
          <input type="radio" name="gender"  value="female" /> Female<br/>
        </div>

        <label>Fecha de nacimiento</label>
        <input
          placeholder='nacimiento'
          type="date"
          value={user.datetime}
          name = 'datetime'
          onChange={(e) => handleChange(e)}
          required
        />

        <label>descripcion</label>
        <textarea
          placeholder='descripcion'
          type = 'text'
          value={user.description}
          name = 'description'
          onChange={(e) => handleChange(e)}
          required
        />
        {errors.description && (<p>{errors.description}</p>)}
        

        <button type="submit"> register</button>
      </form>
    </div>
  )
}

export default Form;