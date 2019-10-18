import React from "react";
import styled from "styled-components";

const Person = styled.span`
  color: red;

`

export default function CharacterCard(props) {
  return <Person>{props.char.name}</Person>;
}
