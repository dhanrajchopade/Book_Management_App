import { useBook } from "../context/BookContext";

export default function AllBooks() {
  const { books, toggleBookStatus, deleteBook } = useBook();

  return (
    <div>
      <h2>All Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.bookName}</h3>
            <p>Status: {book.status}</p>
            <button onClick={() => toggleBookStatus(book.id)}>
              Mark as {book.status === "Unread" ? "Read" : "Unread"}
            </button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
