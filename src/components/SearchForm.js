import React, { useState } from "react";

export default function SearchForm(props) {

  const handleChanges = e => {
     props.setQuery(e.target.value)
  }

  return (
    <section className="search-form">
         <label htmlFor="search">Search:</label>
         <input type="text" 
         placeholder="Search characters.."
         name="search"
         onChange={handleChanges} />
    </section>
  );
}
