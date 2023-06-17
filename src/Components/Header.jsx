import React from "react";

function Header() {
  return (
    <header>
      <h1>
        <u>
          <center>Know Your Place </center>
        </u>

        {document.pathname === "/home" ? <button>About Us</button> : ""}
      </h1>
    </header>
  );
}

export default Header;
