import { Link, useNavigate } from 'react-router-dom'
import {
  Heart,
  CircleUserRound,
  Settings,
  LogOut,
  Calendar,
} from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Cookies from 'js-cookie'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Navbar = () => {
  // const [token, setToken] = useState(false);
  const [showProfile, setShowProfile] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [role, setRole] = useState('ngo')
  const navigate = useNavigate()
  const { user, isAuth, setIsAuth, setUser } = useAuth()
  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center '>
            <Link
              to='/'
              className='flex items-center'>
              <div className='w-25 h-20'><DotLottieReact
                className='w-40 h-20'
                src='https://lottie.host/da10eca5-8e52-45a4-9f51-1b1271270105/jlZWD8WyC2.lottie'
                loop
                autoplay
              /></div>
              <span className='ml-2 text-xl font-bold'>MediPulse</span>
            </Link>
          </div>
          <div className='flex items-center justify-evenly space-x-12'>
            <Link
              to='/dashboard'
              className='text-gray-700 hover:text-blue-600'>
              Dashboard
            </Link>
            <Link
              to='/new'
              className='text-gray-700 hover:text-blue-600'>
              Communities
            </Link>
            <Link
              to='/chat'
              className='text-gray-700 hover:text-blue-600'>
              Chat
            </Link>
            <Link
              to='/doctors'
              className='text-gray-700 hover:text-blue-600'>
              Doctors
            </Link>
          </div>
          <div className='relative hidden sm:ml-6 sm:flex sm:items-center space-x-8'>
            {isAuth == true ? (
              <>
                {(role == 'ngo' || role == 'doctor') && (
                  <Link
                    to='/pastevents'
                    className='text-gray-700 hover:text-blue-600 flex items-center'>
                    <Calendar className='w-5 h-5 mr-1' />
                    Events
                  </Link>
                )}
                <div>
                  <div className='flex items-center space-x-2'>
                    <button
                      onClick={() => {
                        setShowProfile(!showProfile)
                      }}
                      className='focus:outline-none cursor:pointer'>
                      <CircleUserRound className='size-10 text-blue-600 bg-blue-100 p-0.5 border rounded-full' />
                    </button>
                    <span className='text-gray-700'>{user?.firstName + " " + user?.lastName}</span>
                  </div>
                  {showProfile && (
                    <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden'>
                      <Link
                        to='/edit-profile'
                        onClick={() => {
                          setShowProfile(!showProfile)
                        }}
                        className='flex items-center px-4 py-2 hover:bg-gray-100'>
                        <Settings className='w-4 h-4 mr-2' />
                        Edit Profile
                      </Link>
                      <button
                        onClick={() => {
                          setIsAuth(false)
                          setShowProfile(false)
                          setUser(null)
                          Cookies.remove('token')
                          Cookies.remove('id')
                          navigate('/')
                        }}
                        className='flex items-center w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100'>
                        <LogOut className='w-4 h-4 mr-2' />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className='hidden sm:ml-6 sm:flex sm:items-center space-x-8'>
                <Link
                  to='/login'
                  className='text-gray-700 hover:text-blue-600'>
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
