import React from 'react'
import Nav from './Nav'
import { signIn, useSession } from 'next-auth/react'
import Loader from './Loader'

const Layout = ({ children }) => {
  const { data: session,status } = useSession()

  const signInHandler = (e) => {
    e.preventDefault();
    signIn('google')
  }

  if(status === 'loading'){
    return <Loader/>
  }

  if (!session) {
    return (
      <div className="bg-black justify-center items-center w-screen h-screen flex">
        <button className="bg-blue-300 hover:text-black text-white rounded-md drop-shadow-md hover:drop-shadow-2xl px-4" onClick={(e) => signInHandler(e)}>Sign in With Google</button>
      </div>
    )
  }
  return (
    <>
      
        <div className='flex flex-grow w-full'>
          <Nav />
          <div className='w-full p-7 gap-4'>
            {children}
          </div>
        </div>


    </>
  )
}

export default Layout