import React from 'react'

const SocialSignIn = () => {
    const handleGoogleSignIn = () => {}
    const handleXSignIn = () => {}
    const handleFacebookSignIn = () => {}
  return (
    <>
    <div className='flex flex-row gap-4'>
        <div className='cursor-pointer'
        onClick={handleGoogleSignIn}>
            <img src='/google.svg' />
        </div>
        <div className='cursor-pointer'
        onClick={handleXSignIn}>
            <img src='/x.svg' />
        </div>
        <div className='cursor-pointer'
        onClick={handleFacebookSignIn}>
            <img src='/facebook.svg' />
        </div>
    </div>
    </>
  )
}

export default SocialSignIn