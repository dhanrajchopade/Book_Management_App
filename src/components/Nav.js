import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All Books</Link>
        </li>
        <li>
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
}
