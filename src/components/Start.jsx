import React from 'react'
import Header from './global/Header'
import HeroComponent from './blocks/general/HeroComponent'
import { useNavigate } from 'react-router-dom'


const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/confession');
  }
  return (
    <>
    <Header 
            className={'justify-between'}
            icon={true}
            logo={false}
            toggle={true}
        />
    <main>
        <section className='flex flex-col justify-center items-center min-h-svh lg:mt-[-5rem] max-w-[52.125rem] m-auto'>
            <HeroComponent 
            title = {'Romans 10:9-10'}
            bibleVerse = {'“that if you confess with your mouth the Lord Jesus, and believe in your heart that God has raised Him from the dead, you will be saved. For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.”'}
            info={'Click the “Start confession” button and say the salvation prayer to complete the process. You can say it sincerely in your heart if you can’t say the words out loud. '}
            cta={'Start confession'}
            img={<img src='/bible.svg'/>}
            onClick={handleStart}
            />
        </section>
    </main>
       
    </>
 
  )
}

export default Start