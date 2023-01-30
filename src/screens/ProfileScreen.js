import { signOut } from 'firebase/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {
const user = useSelector(selectUser)

  return (
    <div className='h-[100vh] text-white'>
      <NavBar />

      <div className='flex flex-col w-3/6 mx-auto pt-[8%] max-w-[800px] space-y-2'>
        <h1 className='text-5xl mb-5 border-b-[1px] border-[#282c2d]' >Edit Profile</h1>
        <div className='flex'>
          <img
            className='h-28'
            src='https://i.pinimg.com/736x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg'
            alt=''
          />
          <div className='flex-1 ml-6 text-[#fff]'>
            <h2 className='bg-gray-400 p-3 text-xl pl-5'>{user.email}</h2>
            <div className=''>
              <button className='px-5 py-2.5 mt-2.5 w-full text-[#fff] bg-[#e90515] font-semibold cursor-pointer' onClick={() => signOut(auth)}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen