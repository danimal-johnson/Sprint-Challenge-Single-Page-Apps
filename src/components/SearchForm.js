import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Filtered = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = props.allChars.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    // console.log(searchResults);
  }, [searchTerm]);

  return (
    <section className="search-form">
     <h2>Find a character:</h2>
     <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}  
      />
      <Filtered>
        {searchResults.map(char => {
          return (
            <CharacterCard key={char.id} char={char} />
          );
        })
        }
      </Filtered>
    </section>
  );
}
