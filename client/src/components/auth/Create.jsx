import React, { useState} from 'react'
import './login.css'

const Create = () => {
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        user: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = () => {
        console.log('input', input)
    }
    return ( 
        <div>
            <div className='inputBox'>
                <div className='titleBox'>
                     <p className='LoginTitle'>Welcome to Arcade World</p>
                </div>
                <div>
                    <button className='btnAuth0'><img className='googleIcon'src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue with google </button>
                </div>
                <p>or</p>
                <input 
                    className='loginInput' 
                    type="text" 
                    placeholder='Nombre'
                    value={input.name}
                    name="name"
                    onChange={(e) => handleInputChange(e)}
                />
                <div>
                <input 
                    className='loginInput' 
                    type="text" 
                    placeholder='Apellido'
                    value={input.lastName}
                    name="lastName"
                    onChange={(e) => handleInputChange(e)}
                />
                </div>
                <div>
                    <input 
                        className='loginInput' 
                        type="text" 
                        placeholder='Usuario'
                        value={input.user}
                        name="user"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input 
                        className='loginInput' 
                        type="email" 
                        placeholder='Email'
                        value={input.email}
                        name="email"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
            </div>
            <div>
                <input 
                    className='loginInput' 
                    type="password" 
                    placeholder='Password'
                    value={input.password}
                    name="password"
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <button onClick={handleSubmit()} className='btnRegistro'>Registrate</button>
        </div>
     );
}
 
export default Create;