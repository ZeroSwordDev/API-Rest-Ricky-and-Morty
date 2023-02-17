import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [idCharacters, setIdCharacters] = useState(0);

  const HandleChange = e => {
    setIdCharacters(e.target.value);
  };

 const handleSubmit = e => {
    e.preventDefault();
    //Validar que por parametro sea un nuemero
    onSearch(idCharacters) 
 }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca tu personaje por ID"
        onChange={HandleChange}
      ></input>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default SearchBar;
