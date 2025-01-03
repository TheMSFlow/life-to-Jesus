import React from 'react'
import Toggle from '../../global/Toggle'

const BibleHeader = ({ book, chapter, onSection }) => {
  return (
    <>
        <div className='flex flex-row justify-between items-center h-[12%] px-4 text-sm font-medium border-b border-b-t-border'>
            <div className='flex flex-row gap-[0.125rem]'>
                { chapter && <button 
                className='grid place-items-center px-4 py-2 text-bible-pill-text bg-bible-pill'
                style={{borderRadius: '20px 0px 0px 20px'}}
                onClick={onSection}
                >
                    <p>{`${book} ${chapter || 'Select Book'}`}</p>
                </button>}
                <div 
                className='grid place-items-center py-2 px-3 text-bible-pill-text font-medium bg-bible-pill'
                style={{borderRadius: '0px 20px 20px 0px'}}>
                    <p>NLT</p>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div>
                    
                </div>
                <Toggle />
            </div>
        </div>
    </>
  )
}

export default BibleHeader