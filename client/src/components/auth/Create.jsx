import React  from 'react'
import { useForm,  } from 'react-hook-form'
import Swal from 'sweetalert2';
import './auth.css'

const Create = () => {
    const { register, handleSubmit, formState: { errors, isDirty }, reset, watch } = useForm();

    const onSubmit = handleSubmit((data)=> {
        console.log('data', data);
        Swal.fire({
            title: 'Welcome to Arcade World',
            text: '',
            icon: 'success',
        });
        reset()
    });
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
                <form onSubmit={onSubmit}>
                    <input 
                        className='loginInput' 
                        type="text" 
                        placeholder='Name'
                        name="name"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            maxLength: 20,
                            minLength: 3
                        })}
                    />
                    {
                        errors.name?.type === "required" && <span className="error">Name is required</span>
                    }
                    {
                        errors.name?.type === "maxLength" && <span className="error">Name is To long</span>
                    }
                    {
                        errors.name?.type === "minLength" && <span className="error">Name is to short</span>
                    }       
                    <div>
                    <input 
                        className='loginInput' 
                        type="text" 
                        placeholder='Last Name'
                        name="lastName"
                        {...register('lastName', {
                            required: {
                                value: true,
                                message: 'Last name is required'
                            },
                            maxLength: 20,
                            minLength: 3
                        })}
                    />
                    {
                        errors.lastName?.type === "required" && <span className="error">Last name is required</span>
                    }
                    {
                        errors.lastName?.type === "maxLength" && <span className="error">Last name is To long</span>
                    }
                    {
                        errors.lastName?.type === "minLength" && <span className="error">Last name is to short</span>
                    }     
                    </div>
                    <div>
                        <input 
                            className='loginInput' 
                            type="text" 
                            placeholder='Usuario'
                            name="user"
                            {...register('user', {
                                required: {
                                    value: true,
                                    message: 'UserName is required'
                                }
                            })}
                        />
                        {
                            errors.user?.type === "required" && <span className="error">User name is required</span>
                        }
                    </div>
                    <div>
                    <input
                        className='loginInput' 
                        type="email"
                        name="email"
                        placeholder='Email'
                        {...register("email", {
                        required: {
                        value: true,
                        message: "Email is required",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid Email",
                      },
                    })}
                     />
                    {
                        errors.email && <span className='error'>{errors.email.message}</span>
                    }
                    </div>
                    <div>
                    <input
                    className='loginInput' 
                    type="password"
                    name="password"
                    placeholder='Password'
                    {...register("password", {
                        required: {
                        value: true,
                        message: "Password is required",
                        },
                        minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                        },
                    })}
                    />
                    {
                        errors.password && <span className='error'>{errors.password.message}</span>
                    }
                    <div>
                    <input
                    className='loginInput' 
                    type="password"
                    name="confirmPassword"
                    placeholder='Confirm password'
                    {...register("confirmPassword", {
                        required: {
                        value: true,
                        message: "Confirm password is required",
                        },
                        minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                        },
                        validate: (value) =>
                        value === watch('password') || "Passwords don't match",
                    })}
                    />
                    {
                    errors.confirmPassword && (<span className='error'>{errors.confirmPassword.message}</span>)
                    }
                    </div>
                            <button disabled={!isDirty} type='submit' className='btnRegistro'>Registrate</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Create;