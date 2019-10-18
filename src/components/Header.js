import React from "react";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/characters">Find a character</a>
      </nav>
    </header>
  );
}
