import React, { useState } from 'react';
import bibleBooks from '../../utils/bibleBooks.json';

const BibleAccordion = ({setSelectedBook, setSelectedChapter}) => {
  const [activeBook, setActiveBook] = useState(null); // Track the active accordion


  const handleBookClick = (book) => {
    setActiveBook((prevBook) => (prevBook === book ? null : book)); // Toggle accordion
    setSelectedBook(book); //update parent state
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter); //update parent state
  };

  return (
    <div className="w-full h-[76%] overflow-y-auto scrollbar-hide pb-3 bg-bible-pill-dark">
      {bibleBooks.map((book) => (
        <div key={book.name}>
          {/* Book Header */}
          <button
            onClick={() => handleBookClick(book.name)}
            className="w-full h-[3.75rem] px-4 flex justify-between items-center hover:bg-bible-pill-dark-hover text-bible-pill-text"
          >
            <span className="font-medium">{book.name}</span>
            <span>{activeBook === book.name ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 15.5L12 8.5L4.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            :          
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.5L12 15.5L4.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}</span>
          </button>

          {/* Chapters (Show if Active) */}
          {activeBook === book.name && (
            <div className='flex flex-wrap justify-between px-2'>
              {[...Array(book.chapters)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handleChapterClick(i + 1)}
                  className="w-[4.375rem] h-[4.375rem] px-4 text-bible-pill-text hover:bg-bible-pill-dark-hover"
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BibleAccordion;
