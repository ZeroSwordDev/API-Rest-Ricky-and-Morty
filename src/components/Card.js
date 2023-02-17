import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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

 const Card = ({ Character , onClose, id}) => {
  const { name, species, gender, image } = Character;

  return (
    <Container>
      <Column>
        <Button onClick={() => onClose(id)}>Eliminar</Button>

        <Link to= {`/detail/${id}`}> <Name>{name}</Name> </Link>
        <Parrafo>
          {species} & {gender}
        </Parrafo>

        <Image src={image} alt="" />
      </Column>
    </Container>
  );
};


export default Card