import React, { useState } from 'react';
// imported the use state function
const AddBookForm = ({ addBook }) => {
  const [name, setName] = useState('');
  // created the usestate using the array
  const [author, setAuthor] = useState('');
  // created the use-state using the array
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // used to not render the page defaultly so we used the e.preventDefault() inbuilt function
    addBook({ name, author });
    setName('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;