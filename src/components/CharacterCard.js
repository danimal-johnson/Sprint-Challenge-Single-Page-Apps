import React from "react";
import styled from "styled-components";

const Person = styled.div`
  margin: 15px;

  width: 200px;
  max-width: 200px;

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.19);

  h3 {
    line-spacing: 1;
    color: #A96757;
    margin: 0.2rem;
  }

  h4 {
    line-spacing: 1;
    color: black;
    margin: 0.2rem;
  }
`

export default function CharacterCard(props) {
  return (
    <Person>
      <h3>{props.char.name}</h3>
      <h4>{props.char.species}</h4>
    </Person>
  );
}
