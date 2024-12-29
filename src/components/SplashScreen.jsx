import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/start');
    },1000)

    return () => clearTimeout(timer);
  },[navigate]);

  return (
    <>
        <div className='h-svh flex justify-center items-center bg-background'>
            <img src='/ltj-logo.svg' />
        </div>
    </>
  )
}

export default SplashScreen