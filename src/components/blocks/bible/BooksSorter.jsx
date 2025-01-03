import React from 'react'

const BooksSorter = ({ onTraditional, onAlphabetical, isTraditional }) => {
  return (
    <>
        <div className='w-full h-[12%] bg-bible-pill-dark px-4 grid place-items-center border-t border-t-t-border'>
            <div className='w-full h-[2.125rem] bg-bible-pill-bg rounded-lg flex justify-between items-center'>
                <div className='flex flex-row justify-between items-center gap-1 w-full h-full p-[0.125rem]'>
                <div
                    onClick={onTraditional}
                    className={`grid place-items-center text-[#ffffff] ${
                    isTraditional ? "bg-bible-pill-dark" : "bg-transparent"
                    } rounded-lg w-full h-full cursor-pointer`}
                >
                        <p>Traditional</p>
                    </div>
                    <div
                        onClick={onAlphabetical}
                        className={`grid place-items-center text-[#ffffff] ${
                        !isTraditional ? "bg-bible-pill-dark" : "bg-transparent"
                        } rounded-lg w-full h-full cursor-pointer`}
                    >
                        <p>Alphabetical</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BooksSorter