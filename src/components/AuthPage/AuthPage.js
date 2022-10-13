import React, { useRef, useState } from 'react'
import classes from './AuthPage.module.css'
import axios from 'axios';




const AuthPage = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef();
    const [isSignupScreen, setIsSignupScreen] = useState(true);
    const [error, setError] = useState('');
    const [errorClass, setErrorClass] = useState('');

    const [spinner, setSpinner] = useState(false);




    async function submitForm(e) {
        e.preventDefault();
        setErrorClass('');
        const email = emailRef.current.value
        const password = passwordRef.current.value
        let url;

        if (isSignupScreen && (password !== confirmPasswordRef.current.value)) {
            setErrorClass(`${classes.error}`);
            setError('Password and Confirm Password not are same')
            return;

        }

        if (isSignupScreen) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5Gy8AvGi_pD5u6s_AN13PhZiSU4xKrhk"
        }


        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json();
        console.log(data);

        if (data.ok) {
            console.log('done');
        }

        // else { 
        //     https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

        // }



    }


    function toggleSignup() {
        setError('')
        setIsSignupScreen(prevValue => !prevValue)


    }
    return (

        <div className={classes.signup}>
            <form className={`${classes.form} ${errorClass} `} onSubmit={submitForm}>
                <h1>{isSignupScreen ? 'SignUp' : 'Login '}</h1>
                <div className={classes.textFields}>

                    <input type='email' ref={emailRef} placeholder='Email' required />

                    <input type='password' minLength='6' ref={passwordRef} placeholder='Password' required />

                    {isSignupScreen && <input type='password' minLength='6' ref={confirmPasswordRef} placeholder='Confirm Email' required />}
                    <div className={classes.signupContainer}>
                        <button type='submit' className={classes.signupButton}>{isSignupScreen ? 'Sign Up' : "Login"}</button>
                    </div>

                    <div className={classes.forgetButtonContainer}>
                        <button onClick={() => {
                            // navigate('/forgot-password')
                        }} className={classes.forgetButton}>Forget Password?</button>
                    </div>

                    <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}> {error}</p>







                </div>
            </form>




            <button onClick={toggleSignup} className={classes.loginButton}>{isSignupScreen ? 'Have an Account? Login' : 'Dont have an Acoount? Sign up'}</button>
            {spinner && <div className={classes.loader}></div>}




        </div>
    )
}

export default AuthPage