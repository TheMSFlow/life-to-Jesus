import React from 'react'
import Toggle from '../../global/Toggle'

const BooksHeader = ({onClose}) => {
  return (
    <>
        <div className='flex flex-row justify-between items-center h-[12%] px-4 bg-bible-bg border-b border-b-t-border'>
            <div className='flex flex-row gap-1 justify-center items-center text-2xl text-bible-subtle-text'>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 17V6C1.5 2 2.5 1 6.5 1H13.5C17.5 1 18.5 2 18.5 6V16C18.5 16.14 18.5 16.28 18.49 16.42M6 6H14M6 9.5H11M4.35 14H18.5V17.5C18.5 19.43 16.93 21 15 21H5C3.07 21 1.5 19.43 1.5 17.5V16.85C1.5 15.28 2.78 14 4.35 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <p>Books</p>
            </div>
            <div>
              <button 
              onClick={onClose}
              className='xl:hidden text-bible-subtle-text'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28C18.2484 21.7516 21.7516 18.2484 28 12M28 28C21.7516 21.7516 18.2484 18.2484 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>
        </div>
    </>
  )
}

export default BooksHeader