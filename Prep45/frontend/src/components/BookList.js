const BookList = ({ books, removeBook }) => {
//using map to display the data 
//and destructured the data and represented in the specific place 
// used the on click function to remove the specific book and sent the id of that specific book

    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} by {book.author}
            <button onClick={() => removeBook(book.id)}>Remove</button>
            
          </li>
        ))}
      </ul>
    );
  };
  export default BookList;