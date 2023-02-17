import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.div`
 
`;

const Image = styled.img`
  width: 100%;
`;

const DetailCard = ({ characterDetailValue }) => {
  const { name, status, species, gender, origin, image } = characterDetailValue;
  return (
    <Card>
      <h1>Name: {name}</h1>
      <h2>Status :{status}</h2>
      <h2>Specie:{species}</h2>
      <h2>Gender :{gender}</h2>
      <h2>Origin :{origin.name}</h2>
      <CardImage>
      <Image src={image} alt="" />
      <button> <Link to={'/home'}>Regresar </Link></button>
      </CardImage>
    </Card>
  );
};

export default DetailCard;
