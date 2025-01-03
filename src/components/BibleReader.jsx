import React, { useEffect, useState } from 'react'
import BooksHeader from './blocks/bible/BooksHeader'
import BooksSorter from './blocks/bible/BooksSorter'
import BibleAccordion from './blocks/bible/BibleAccordion'
import VersesComponent from './blocks/bible/VersesComponent'
import BibleHeader from './blocks/bible/BibleHeader'
import BibleFooter from './blocks/bible/BibleFooter'
import bibleBooks from './utils/bibleBooks.json'


const BibleReader = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentBookChapter, setCurrentBookChapter] = useState({ book: null, chapter: null });
  const [isTraditional, setIsTraditional] = useState(true);
  const [sortedBooks, setSortedBooks] = useState(bibleBooks);

  useEffect(() => {
    const storedSelection = JSON.parse(localStorage.getItem('selectedBookChapter'));
    if (storedSelection) {
      setSelectedBook(storedSelection.book);
      setSelectedChapter(storedSelection.chapter);
      setCurrentBookChapter(storedSelection);
    } else {
      const defaultSelection = { book: 'Genesis', chapter: 1 };
      setSelectedBook(defaultSelection.book);
      setSelectedChapter(defaultSelection.chapter);
      setCurrentBookChapter(defaultSelection);
    }
  }, []);

  useEffect(() => {
    if (selectedBook && selectedChapter) {
      localStorage.setItem(
        'selectedBookChapter',
        JSON.stringify({ book: selectedBook, chapter: selectedChapter })
      );
      setCurrentBookChapter({ book: selectedBook, chapter: selectedChapter });
    }
  }, [selectedChapter]);

  const handleTraditionalSorting = () => {
    setSortedBooks([...bibleBooks]);
    setIsTraditional(true);
  };

  const handleAlphabeticalSorting = () => {
    setSortedBooks([...bibleBooks].sort((a, b) => a.name.localeCompare(b.name)));
    setIsTraditional(false);
  };

  const handlePrevious = () => {
    const bookIndex = bibleBooks.findIndex((b) => b.name === selectedBook);

    if (selectedChapter > 1) {
      setSelectedChapter((prev) => prev - 1);
    } else if (bookIndex > 0) {
      const previousBook = bibleBooks[bookIndex - 1];
      setSelectedBook(previousBook.name);
      setSelectedChapter(previousBook.chapters);
    }
  };

  const handleNext = () => {
    const bookIndex = bibleBooks.findIndex((b) => b.name === selectedBook);
    const currentBook = bibleBooks[bookIndex];

    if (selectedChapter < currentBook.chapters) {
      setSelectedChapter((prev) => prev + 1);
    } else if (bookIndex < bibleBooks.length - 1) {
      const nextBook = bibleBooks[bookIndex + 1];
      setSelectedBook(nextBook.name);
      setSelectedChapter(1);
    }
  };

  const handleClose = () => {

  }
  
  return (
    <>
    <main className='block xl:grid xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-0 max-h-[100svh]  overflow-y-auto overflow-x-hidden w-screen bg-bible-bg'>
      {/* Sidebar, Mobile & Modal */}
    <section className='w-full h-[100vh] bg-bible-pill-dark'>
      <BooksHeader 
        onClose={handleClose}
      />
      <BibleAccordion 
        setSelectedBook={setSelectedBook}
        setSelectedChapter={setSelectedChapter}
        books={sortedBooks}
      />
      <BooksSorter
        onTraditional={handleTraditionalSorting}
        onAlphabetical={handleAlphabeticalSorting}
        isTraditional={isTraditional}
      />
    </section>
    {/* BibleHeader, Scriptures, BibleFooter */}
    <section className='relative w-full h-[100svh] bg-bible-bg'>
      <BibleHeader 
        book={currentBookChapter.book}
        chapter={currentBookChapter.chapter}
      />
      <VersesComponent 
        book={selectedBook}
        chapter={selectedChapter}
      />
      <BibleFooter
        currentBook={selectedBook}
        currentChapter={selectedChapter}
        books={bibleBooks}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
    </main>
    </>
  )
}

export default BibleReader