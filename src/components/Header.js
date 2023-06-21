import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const count = useSelector(state => state.posts.length);
  return (
    <header >
      <div className="container header-container">
        <h2>Posts</h2>
        <span>Posts count: {count}</span>
      </div>
    </header>
  );
}

export default Header;
