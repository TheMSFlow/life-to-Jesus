import React, { useState } from 'react'
import BooksHeader from './blocks/bible/BooksHeader'
import BooksSorter from './blocks/bible/BooksSorter'
import BibleAccordion from './blocks/bible/BibleAccordion'
import VersesComponent from './blocks/bible/VersesComponent'
import BibleHeader from './blocks/bible/BibleHeader'
import BibleFooter from './blocks/bible/BibleFooter'


const BibleReader = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleTraditionalSorting = () => {
    
  }
  const handleAlphabeticalSorting = () => {

  }
  
  const handleClose = () => {

  }
  
  return (
    <>
    <main className='block xl:grid xl:grid-cols-[376px_minmax(0,1fr)] xl:gap-0 max-h-[100svh]  overflow-y-auto overflow-x-hidden w-screen bg-bible-bg'>
      {/* Sidebar, Mobile & Modal */}
    <section className='w-full h-[100vh] bg-bible-pill-dark'>
      <BooksHeader 
      onClose={handleClose}
      />
      <BibleAccordion 
      setSelectedBook={setSelectedBook}
      setSelectedChapter={setSelectedChapter}
      />
      <BooksSorter 
      onTraditional={handleTraditionalSorting}
      onAlphabetical={handleAlphabeticalSorting}
      />
    </section>
    {/* BibleHeader, Scriptures, BibleFooter */}
    <section className='relative w-full h-[100svh] bg-bible-bg'>
      <BibleHeader 
      book={selectedBook}
      />
      <VersesComponent 
      book={selectedBook}
      chapter={selectedChapter}
      />
      <BibleFooter />
    </section>
    </main>
    </>
  )
}

export default BibleReader