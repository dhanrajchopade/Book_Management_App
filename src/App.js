import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookProvider from "./context/BookContext";
import AllBooks from "./pages/AllBooks";
import AddBook from "./pages/AddBook";
import FilterBooks from "./pages/FilterBooks";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <BookProvider>
        <FilterBooks />
        <Nav />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </BookProvider>
    </Router>
  );
}

export default App;
