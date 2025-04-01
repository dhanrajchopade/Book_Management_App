import { useBook } from "../context/BookContext";

export default function FilterBooks() {
  const { books } = useBook();

  const totalCount = books.length;
  const readCount = books.filter((book) => book.status === "Read").length;
  const unreadCount = books.filter((book) => book.status === "Unread").length;

  return (
    <div className="filter-buttons">
      <button>All Books ({totalCount})</button>
      <button>Read Books ({readCount})</button>
      <button>Unread Books ({unreadCount})</button>
    </div>
  );
}
