import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    padding: 1rem;
  }

`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navigation>
        <a href="/">Home</a>
        <a href="/characters">Find a character</a>
      </Navigation>
    </header>
  );
}
