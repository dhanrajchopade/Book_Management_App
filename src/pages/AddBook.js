import { useState } from "react";
import { useBook } from "../context/BookContext";

let nextId = 4;

export default function AddBook() {
  const { addBook } = useBook();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Unread");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addBook({ id: nextId++, bookName: title, status });
      setTitle("");
      setStatus("Unread");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Unread">Unread</option>
        <option value="Read">Read</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}
