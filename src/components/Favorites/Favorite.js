import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { deleteFavoriteCard } from "../../redux/actions";


const Container = styled.div`
  background-color: white;
  border-radius: 10%;
  diplay: flex;
  height: 470px;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10%;
  margin: 5px;
`;
const Button = styled.button`
  padding: 20px;
  background: transparent;
  width: 100%;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Name = styled.h3`
  text-align: center;
  color: black;
  margin-top: 15px;
`;
const Parrafo = styled.p`
  text-align: center;
  color: black;
`;

const Favorite = ({ Favorite }) => {
    const { name, species, gender, image,id } = Favorite;
    const dispatch = useDispatch()
    const deleteFavoriteCards = id =>  dispatch(deleteFavoriteCard(id))

  return (
      <Container>
      <Column>
        <Button onClick={() => deleteFavoriteCards(id)}>Quitar de Fav</Button>

        <Link to= {`/detail/${id}`}> <Name>{name}</Name> </Link>
        <Parrafo>
          {species} & {gender}
        </Parrafo>

        <Image src={image} alt="" />
      </Column>
    </Container>

    
  );
};

export default Favorite;
