import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Toggle = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
        <div 
        onClick={toggleTheme}
        className='relative w-[4.529rem] h-[2rem] cursor-pointer'>
            <div className='relative'>
              <img className='absolute' 
              style={{ opacity: 'var(--opacity-day)' }}
              src='/day.svg' /> 
              <img className='absolute' 
              style={{ opacity: 'var(--opacity-night)' }}
              src='/night.svg' /> 
            </div>
            <div 
            className='relative w-[1.5rem] h-[1.5rem] top-[12%] transition-[right] duration-300 ease-in-out'
            style={{ right: 'var(--offset)' }}
            >
              <img className='absolute' 
              style={{ opacity: 'var(--opacity-sun)' }}
              src='/sun.svg' /> 
              <img className='absolute' 
              style={{ opacity: 'var(--opacity-moon)' }}
              src='/moon.svg' /> 
            </div>
          </div>
    </>
  )
}

export default Toggle