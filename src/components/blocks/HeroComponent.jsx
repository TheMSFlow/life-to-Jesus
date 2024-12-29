import React from 'react'
import Title from './Title'
import Info from './Info'
import Button from './Button'


const HeroComponent = ({title, bibleVerse, info, cta, onClick, icon, img }) => {
  return (
    <div className='flex flex-col justify-center px-4 w-full m-auto'>
        <div className='w-full h-full max-w-[52.125rem] flex flex-col gap-4 justify-center flex-nowrap items-center text-center'>
            <div className='flex flex-col gap-[1rem] justify-center items-center'>
                <Title 
                title = {title}
                img = {img}
                />
                <div className='font-garamond xl:text-4xl lg:text-3xl text-2xl '>{bibleVerse}</div>
            </div>
            <div className='flex flex-col gap-[2rem] justify-center items-center'>
                <Info infoText = {info} />
                <div className='lg:w-[22rem] w-[16rem]'>
                  <Button
                  type='primary'
                  cta={cta}
                  onClick={onClick}
                  icon={icon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroComponent