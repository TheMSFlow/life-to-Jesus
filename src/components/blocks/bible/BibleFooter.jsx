import React from 'react'

const BibleFooter = ({ currentBook, currentChapter, books, onPrevious, onNext }) => {
    const isFirstBookAndChapter = currentBook === books[0].name && currentChapter === 1;
    const isLastBookAndChapter =
      currentBook === books[books.length - 1].name &&
      currentChapter === books[books.length - 1].chapters;

  return (
   <>
    <div className='border-t border-t-t-border h-[12%] px-4 flex flex-row justify-between items-center'>
        <button
        className='bg-bible-pill rounded-lg p-1 cursor-pointer'
        onClick={onPrevious}
        disabled={isFirstBookAndChapter}
        style={{ visibility: isFirstBookAndChapter ? 'hidden' : 'visible' }}
        >
            <img src='/previous.svg' />
        </button>
        <div className='font-garamond text-2xl text-bible-subtle-text '>
            <p>The Holy Bible</p>
        </div>
        <div 
        className='bg-bible-pill rounded-lg p-1 cursor-pointer'
        onClick={onNext}
        disabled={isLastBookAndChapter}
        style={{ visibility: isLastBookAndChapter ? 'hidden' : 'visible' }}
        >
            <img src='/next.svg' />
        </div>
    </div>
   </>
  )
}

export default BibleFooter