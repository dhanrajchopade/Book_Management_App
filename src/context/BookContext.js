import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export default function BookProvider({ children }) {
  const initialBooks = [
    { id: 1, bookName: "Book 1", status: "Read" },
    { id: 2, bookName: "Book 2", status: "Unread" },
    { id: 3, bookName: "Book 3", status: "Read" },
  ];

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  });

  // Save books to localStorage whenever books/data change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Function to add a new book
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Function to toggle book status between "Read" and "Unread"
  const toggleBookStatus = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Unread" ? "Read" : "Unread" }
          : book
      )
    );
  };

  // Function to delete a book by its ID
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, toggleBookStatus, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  return useContext(BookContext);
}
