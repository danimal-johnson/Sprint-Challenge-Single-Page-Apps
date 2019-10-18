import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState ([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      const getCharacters = () => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            console.log (response.data);
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      console.log ("Getting Characters");
      getCharacters();
  }, []);

  return (
    <section className="character-list">

      <SearchForm allChars={characters} />

      <h2>All the characters:</h2>
      <ul>
        {characters.map( char => {
          return (
          <li>{char.name}</li>
        )})
        }
      </ul>
    </section>
  );
}
