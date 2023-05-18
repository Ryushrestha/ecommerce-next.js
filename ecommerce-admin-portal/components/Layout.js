import React from 'react'
import Nav from './Nav'
import { signIn, useSession } from 'next-auth/react'

const Layout = ({ children }) => {
  const { data: session } = useSession()

  const signInHandler = (e) => {
    e.preventDefault();
    signIn('google')
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
      
        <div className='flex flex-grow'>
          <Nav />
          <div>
            {children}
          </div>
        </div>


    </>
  )
}

export default Layout