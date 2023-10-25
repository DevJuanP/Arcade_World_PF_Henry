
import './login.css'
const Login = () => {
    
    return ( 
        <div>
            <div className='inputBox'>
                <div className='titleBox'>
                     <p className='LoginTitle'>Sign in to Arcade World</p>
                </div>
                <div>
                    <button className='btnAuth0'><img className='googleIcon'src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>Continue with google </button>
                </div>
                <p>or</p>
                <input 
                    className='loginInput' 
                    type="email" 
                    placeholder='Email o Username'
                    name="email"
                />
            </div>
            <div>
            <input 
                className='loginInput' 
                type="password" 
                placeholder='Password'
                name="password"
                />
            </div>
            <button className='btnLogin'>Log in</button>
        </div>
     );
}
 
export default Login;