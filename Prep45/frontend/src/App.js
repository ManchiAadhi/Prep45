import './App.css';
import React, { useState, useEffect } from 'react';
// importing the use state and use effect hooks from react
import AddBookForm from './components/AddBookForm';
// importing the addbookform component from components folder
import BookList from './components/BookList';
// importing the booklist component from components folder
const App = () => {
  const [books, setBooks] = useState([]);
  //created an array and used the use state hook
  // fetch the list of books from the backend API by usin the use effect hook 
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    // used the async and await bcz this fetch may take time and to make sure code runes smoothly we use it here 
    // try catch is used to catch the error 
    try {
      const response = await fetch('http://localhost:5000/books');
      // fetch is used to call the data from backed 
      const data = await response.json();
      // converting to json by using . json()
      setBooks(data);
    } catch (error) {
      console.log('Error fetching books:', error);
      // printing the error if it occured
    }
  };

  const addBook = async (book) => {
   
    try {
      // used fetch to the api calls 
      // here it is post  to send the books data to backend 
      // and data is send in the json format  which is converted to string format
      const response = await fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log('Error adding book:', error);
      // printing the error 
    }
  };

  const removeBook = async (id) => {
     // used fetch to the api calls 
      // here it is delet used   to delet the books data to backend 
    try {
      const response = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log('Error removing book:', error);
      // printing the error 
    }
  };

  return (
    <div>
      <h1>Book Inventory</h1>
      <AddBookForm addBook={addBook} /> 
      
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};
 // addbook here used as props to transefer data from the addbooks 

export default App;