import React from 'react'

const Title = ({title, img}) => {
  return (
    <>
    <div className='flex flex-row justify-center items-center gap-2 w-fit bg-title pt-1 pr-[0.625rem] pb-1 pl-[0.625rem] rounded'>
        {img}
        <p className='font-garamond text-xs xl:text-base text-fair-black'>{title}</p>
    </div>
    </>
  )
}

export default Title