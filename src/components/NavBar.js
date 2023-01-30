import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[])

    return (
        <div className={`fixed t-0 p-5 w-[100%] h-[70px] z-10 ease-in duration-500 ${show && 'bg-[#111]'}`} >
            <div className='flex justify-between'>
                <img
                    className='fixed left-0 top-6 w-24 cursor-pointer pl-5 object-contain'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt=''
                    onClick={() => navigate('/')}
                />

                <img
                    className='fixed right-5 h-8 w-8 cursor-pointer'
                    src='https://i.pinimg.com/736x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg'
                    alt=''
                    onClick={() => navigate('/profile')}
                />
            </div>
        </div>
    );
}

export default NavBar