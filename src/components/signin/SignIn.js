import React from 'react' ;
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.css' ;

function SignIn(){
    return(
        <div className='container'>
        <div className='signin' onClick={signInWithGoogle}>Sign In with Google</div>
        </div>
    )
}

export default SignIn ;