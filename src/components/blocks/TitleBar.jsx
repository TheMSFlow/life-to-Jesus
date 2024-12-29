import React from 'react'
import Title from './Title'

const TitleBar = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center w-full xl:px-24 px-4 lg:px-8'>
            <div>
                <img src='/voice.svg'/>
            </div>
            <Title 
            title={'Salvation prayer'}
            img={<img src='/prayer.svg'/>}/>
            <div>
                <img src='/sound.svg'/>
            </div>
        </div>
    </>
  )
}

export default TitleBar