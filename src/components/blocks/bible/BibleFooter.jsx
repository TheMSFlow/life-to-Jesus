import React from 'react'

const BibleFooter = ({onPrevious, onNext}) => {
  return (
   <>
    <div className='border-t border-t-t-border h-[12%] px-4 flex flex-row justify-between items-center'>
        <div 
        className='bg-bible-pill rounded-lg p-1 cursor-pointer'
        onClick={onPrevious}
        >
            <img src='/previous.svg' />
        </div>
        <div className='font-garamond text-2xl text-bible-subtle-text '>
            <p>The Holy Bible</p>
        </div>
        <div 
        className='bg-bible-pill rounded-lg p-1 cursor-pointer'
        onClick={onNext}
        >
            <img src='/next.svg' />
        </div>
    </div>
   </>
  )
}

export default BibleFooter