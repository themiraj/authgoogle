import React,{useState} from 'react'
import { TextField, Button,Snackbar,Alert} from '@mui/material'
import googleImage from '../assets/images/google.png'
import firebase from '../firebase'
import { getAuth, createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const auth = getAuth();
export default function Signup() {
    // Sign up Details
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const [message, setmessage] = useState('This is a success message!')
    const [alert, setalert] = useState('success')
    // End Signup Detatails 
    console.log(email)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const SignUpPop = () => {
        console.log('sjslaklsafj')
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    const createUser  = (e) => {
        e.preventDefault();
        if(name && phone && email && password){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, phoneNumber: phone
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setmessage('Are you successfull register')
                setalert('success');
                handleClick();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setmessage(errorMessage);
                setalert('error');
                handleClick();
                // ..
            });
        }else{
            !name ? setmessage('please fill all required name') :
            !phone ? setmessage('please fill all required phone') :
            !email ? setmessage('please fill all required email') :
            !password ? setmessage('please fill all required password') 
            :setmessage('please fill all required feilds')
            setalert('error');
            handleClick();
        }
    }
    // End Create User
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    return (
        <div className="login-page sign-up">
            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose}
                >
                <Alert severity={alert}>{message}</Alert>
            </Snackbar>
            <form onSubmit={createUser}>
                <h2>Signup Your Account</h2>
                <TextField id="nameText" label="Name" variant="standard" fullWidth sx={{ mb: 3 }}
                    onChange={(e)=>setname(e.target.value)} 
                    value={name ? name : ''}
                />
                <TextField id="emailText" label="Email" variant="standard" fullWidth sx={{ mb: 3 }}
                    onChange={(e)=>setemail(e.target.value)} 
                    value={email}
                />
                <TextField id="phoneText" label="Phone" variant="standard" fullWidth sx={{ mb: 3 }}
                    onChange={(e)=>setphone(e.target.value)} 
                    value={phone}
                />
                <TextField id="passwordText" label="Password" variant="standard" fullWidth type="password" sx={{ mb: 3 }}
                    onChange={(e)=>setpassword(e.target.value)} 
                    value={password}
                />
                <Button variant="contained" sx={{ mb: 3 }} type="submit">SignUp</Button>
                <div>If you have already Acoount <a href="#">Login</a></div>
                <div className="forgot-google-container" onClick={SignUpPop}>
                    <div className="google-login">
                        <img src={googleImage} alt="google-icon"/> <span>Signup with Google</span>
                    </div>
                </div> 
                
            </form>
        </div>
    )
}
