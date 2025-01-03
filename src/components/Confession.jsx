import React from 'react'
import LyricsPlayer from './blocks/confession/LyricsPlayer'
import salvationPrayerLyrics from './utils/salvationPrayerLyrics'
import Title from './blocks/general/Title'

const Confession = ({handleFinish}) => {
  
  return (
    <>
    <main className='flex flex-col h-svh justify-center items-center '>
      <section className=''>
        <div className='py-4 flex justify-center'>
        <Title
        title={'Salvation prayer'}
        img={<img src='/prayer.svg'/>}/>
        </div>
        <div className='w-full flex items-center justify-center'>
          <LyricsPlayer 
          audioSrc={'/salvation-prayer.mp3'}
          lyricsData={salvationPrayerLyrics}
          highlightColor='black'
          className={' w-[70vw] h-[60vh] xl:w-[60rem] xl:h-[25rem]'}
          onFinish={handleFinish}
          />
        </div>
      </section>
    </main>
    </>
  )
}

export default Confession