import React, { useRef } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {
    const emailRef = useRef();
    const passwordRef = useRef()

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {
            alert(err.message);
        })
    };
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {
            alert(err.message);
        })
    };

    return (
        <div className='max-w-[500px] p-20 mx-auto bg-[#111]/80 rounded-lg' >
            <form className='grid flex-col space-y-2'>
                <h1 className='text-3xl font-bold text-left'>Sign In</h1>
                <input className='p-2 rounded-sm border-0 outline-0 text-[#111]' placeholder='Email' type='email' ref={emailRef} />
                <input className='p-2 rounded-sm border-0 outline-0 text-[#111]' placeholder='Password' type='password' ref={passwordRef} />
                <button
                    className='bg-[#e50914] py-1.5 text-lg text-[#fff] border-0 outline-0 font-semibold rounded-sm cursor-pointer'
                    type='submit'
                    onClick={signIn}
                >Sign In
                </button>

                <h4 className='text-left pt-5'>
                    <span className='text-gray-400'>New to Netflix? </span>
                    <span className='cursor-pointer hover:underline' onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen