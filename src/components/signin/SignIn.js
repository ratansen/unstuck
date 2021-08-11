import React from 'react' ;
import {Link} from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.css' ;

function SignIn(){
    return(
        <div className='container'>
        <Link style={{ textDecoration: "none" }} to='/'>
        <div className='signin' onClick={signInWithGoogle}>
        <i className="fab fa-google google"></i>
        Sign In with Google
        </div>

        </Link>
        
        </div>
    )
}

export default SignIn ;