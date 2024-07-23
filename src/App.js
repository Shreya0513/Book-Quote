// src/App.js
import React from 'react';
import BookQuoteWidget from './BookQuoteWidget';

function App() {
  return (
    <div className="App">
      <BookQuoteWidget
        bookTitle="The Great Gatsby"
        author="F. Scott Fitzgerald"
        quote="So we beat on, boats against the current, borne back ceaselessly into the past."
        readerName="John Doe"
        bookCoverUrl="https://example.com/great-gatsby-cover.jpg"
      />
    </div>
  );
}

export default App;
