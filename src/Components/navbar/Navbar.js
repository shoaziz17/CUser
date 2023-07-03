import React from "react";
import "./Navbar.css";
function Navbar({ userLength }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">
          {userLength > 0
            ? "You have " + userLength + " users"
            : "No users yet:("}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
