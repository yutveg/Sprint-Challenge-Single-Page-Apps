import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js'
import SearchForm from './SearchForm.js';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const charList = res.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        )
        setCharacters(charList);
      })
      .catch(error => {
        console.log(error);
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery} />
      <h2>Character List:</h2>
      {characters.map(character => (
         <CharacterCard 
         key={character.name} 
         name={character.name}
         species={character.species}
         from={character.origin.name} />
      ))}
    </section>
  );
}
