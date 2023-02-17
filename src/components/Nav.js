import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  background: rgb(24, 96, 50);
  background: linear-gradient(
    90deg,
    rgba(24, 96, 50, 1) 0%,
    rgba(8, 172, 2, 1) 50%,
    rgba(36, 97, 41, 1) 100%
  );
`;

const DivEnlaces = styled.div`
  padding: 20px;
`;

const Nav = ({ setCharacter, Characters , logout }) => {
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        const IdData = Characters.find(i=> i.id === data.id)
        if (IdData) {
          window.alert("No hay personajes con ese ID");
        } else {
          if(data.name)setCharacter((oldChars) => [...oldChars, data]);
        }
      });
  };

  const ButtonRandom = ()=>{

    const numero = Math.floor(Math.random() * 826)
    

    onSearch(numero)
  }

  return (
    <div>
      <StyledContainer >
        <DivEnlaces>
          <Link to="about" >
            About
          </Link>
          <Link to="/home" >
            Home
          </Link>
          <Link to="/favorites" >
            Favorites
          </Link>
         <button onClick={logout}> 
          Logout
          </button>
        </DivEnlaces>

      <button onClick={ButtonRandom}> Personaje Random</button>
        <SearchBar onSearch={onSearch} />
      </StyledContainer>
    </div>
  );
};

export default Nav;
