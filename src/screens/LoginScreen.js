import React, {  useState } from 'react'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div
            className='relative object-contain h-[100%]'
            style={{
                backgroundImage: 'url("https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}>

            <div className='z-20'>
                <img
                    className=' fixed left-0 w-40 object-contain pl-5 pt-5'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt=''
                />
                <button
                    className='fixed right-6 top-5 px-5 py-2 bg-[#e50914] text-lg text-[#fff] font-semibold rounded-sm cursor-pointer'
                    onClick={() => setSignIn(true)}
                >Sign In
                </button>

                <div
                    className='w-[100%] h-[100vh] bg-black/40 z-10 bg-gradient-to-t from-[#111]/10 to-[#111]'
                />

                <div className='absolute top-[30%] w-[100%] mx-auto p-5 z-10 text-[#fff] text-center left-0 right-0'>
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1 className='mb-5 text-5xl font-bold'>This is a Netflix Clone! Do not input sensitive info.</h1>
                            <h2 className='text-3xl font-normal mb-7'>Can't watch a thing cause its not really Netflix!</h2>
                            <h3 className='text-lg font-light'>Don't worry, this part is safe. Press "Get Started" to see the rest of the demo.</h3>

                            <div className='p-2.5'>
                                <form>
                                    <input type='email' placeholder='Email Address' className='p-2.5 w-[30%] max-w-[600px] text-[#111] h-14 outline-0 border-0 rounded-l-sm' />
                                    <button
                                        className='pb-[15px] pt-[17px] px-5 text-base font-semibold rounded-r-sm text-[#fff] bg-[#e50914] cursor-pointer'
                                        onClick={() => setSignIn(true)}
                                    >Get Started</button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen