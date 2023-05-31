import React, { useContext } from 'react';
import './SignIn.css';
import { useGoogleLogin } from '@react-oauth/google';
import { UserContext } from '../App';
import AlertContext from '../utils/AlertContext';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/google-icon 1.svg';

const SignIn = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { setAlert } = useContext(AlertContext);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            setAlert({
                message: {
                    data: {
                        message: "Sign In Successfull"
                    },
                    status: 200
                }
            })
            navigate('/')
           
        },
        onError: (error) => setAlert(error)
    });

    return (
        <div className='signin-container'>
            <div className='sign-container-left'>
                <h1>Board.</h1>
            </div>
            <div className='sign-container-right'>
                <section>
                    <header>
                        <h2>Sign In</h2>
                        <p>Sign in to your account</p>
                        <button onClick={() => login()}><img src={GoogleIcon} alt='google-icon'></img>Sign in with Google
                        </button>
                        <div className='signin-form'>
                            <form>
                                <label>Email address</label>
                                <input type='email' placeholder='Enter your email' />
                                <label>Password</label>
                                <input type='password' placeholder='Enter your email' />
                                <p>Forgot password?</p>
                                <div className='signin-btn'>Sign In</div>
                            </form>
                        </div>
                        <div className='register-here'>Don't have an account?<span>Register here</span> </div>
                    </header>
                </section>
            </div>
        </div>
    )
}

export default SignIn