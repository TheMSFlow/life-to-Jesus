import React from 'react'
import Toggle from '../../global/Toggle'

const BibleHeader = ({ book }) => {
  return (
    <>
        <div className='flex flex-row justify-between items-center h-[12%] px-4 text-sm font-medium border-b border-b-t-border'>
            <div className='flex flex-row gap-[0.125rem]'>
                { book && <div 
                className='grid place-items-center px-4 py-2 text-bible-pill-text bg-bible-pill'
                style={{borderRadius: '20px 0px 0px 20px'}}
                >
                    <p>{book}</p>
                </div>}
                { book && <div 
                className='grid place-items-center py-2 px-4 text-bible-pill-text font-medium bg-bible-pill'
                style={{borderRadius: '0px 20px 20px 0px'}}>
                    <p>NIV</p>
                </div> }
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