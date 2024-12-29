import React from 'react'
import SignInForm from './blocks/login/SignInForm'
import SocialSignIn from './blocks/login/SocialSignIn'
import Confetti from './blocks/confession/Confetti'

const Finish = () => {
  return (
    <>
        <main className='flex flex-col min-h-svh justify-center items-center '>
          <section className='flex flex-col justify-center items-center xl:grid xl:grid-cols-[20rem_1fr] xl:h-[30rem] gap-4 w-full xl:max-w-[52.125rem] m-auto py-5 px-4 '>
            <div className='h-[15rem] xl:h-full rounded-3xl bg-[url("/joy.webp")] bg-no-repeat bg-cover bg-center w-full lg:w-[40rem] xl:w-[20rem]' />
            <div className='flex flex-col gap-4 items-center w-full xl:w-full md:max-w-[31.125rem]'>
              <p className='font-garamond text-2xl md:text-3xl text-center'>
              Congratulations! <br />
              Welcome to the kingdom of light!
              </p>
              <p className='text-xs text-center max-w-[48ch] md:max-w-[60ch]'>
              Learn about your new life in Christ, discover your teacher and helper the Holy Spirit, and practice the culture of Heaven through the word of God.
              </p>
              <div className=' h-[0.125rem] w-[2rem] bg-primary my-2' />
              <div className='w-full flex flex-col gap-4 items-center justify-center px-1'>
                <p className='font-garamond text-2xl md:text-3xl text-center'>Sign in to continue</p>
                <SignInForm />
                {/* divider */}
                <div className='flex flex-row gap-2 items-center my-2'>
                  <div className=' h-[1px] w-[8rem] bg-primary' />
                  <p className='text-[0.75rem] text-primary'>or</p>
                  <div className=' h-[1px] w-[8rem] bg-primary' />
                </div>
                {/* divider */}
                <div className='flex flex-col gap-4'>
                  <p className='text-xs text-center'>Sign in with social</p>
                    <SocialSignIn />
                </div>
              </div>
            </div>
            <div className='bg-transparent' />
          </section>
          <Confetti />
        </main>
    
    </>
  )
}

export default Finish