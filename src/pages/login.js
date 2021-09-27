import React from 'react'
import { TextField, Button } from '@mui/material'
import googleImage from '../assets/images/google.png'
export default function login() {
    return (
        <div className="login-page">
            <form>
                <h2>Login Your Account</h2>
                <TextField id="emailText" label="Email" variant="standard" fullWidth sx={{ mb: 3 }}/>
                <TextField id="passwordText" label="Password" variant="standard" fullWidth type="password" sx={{ mb: 3 }}/>
                <Button variant="contained">Submit</Button>
                <div className="forgot-google-container">
                    <span>Forgot your password ?</span>
                    <div className="google-login">
                        <img src={googleImage} alt/> <span>Sign in with Google</span>
                    </div>
                </div> 
                
            </form>
        </div>
    )
}
