import React from 'react'

const Info = ({infoText}) => {
  return (
    <>
    <div className='flex flex-row gap-2 max-w-[40rem] justify-start items-start lg:text-xs text-[0.625rem] italic text-left px-4'>
        <img className='h-[1.25rem]' src='/info.svg' />
        {infoText}
    </div>
    </>
  )
}

export default Info