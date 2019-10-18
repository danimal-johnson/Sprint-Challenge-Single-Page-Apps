import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = props.allChars.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    console.log("f");
    console.log(searchResults);
  }, [searchTerm]);

  return (
    <section className="search-form">
     <h2>The Search Form.</h2>
     <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}  
      />
      <ul>
        {searchResults.map(char => {
          return (
            <CharacterCard key={char.id} char={char} />
          );
        })
        }
      </ul>
    </section>
  );
}
