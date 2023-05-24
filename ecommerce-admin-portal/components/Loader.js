import React from 'react'
import { ClipLoader, RingLoader } from 'react-spinners'

export const BounceLoader = ()=> {
  return <RingLoader color={'#2596be'}/>
}

const Loader = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return (
    <div className='flex justify-center items-center h-screen'>
    <ClipLoader
    color={'#ffffff'}
    loading={true}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    </div>
    )
}

export default Loader



