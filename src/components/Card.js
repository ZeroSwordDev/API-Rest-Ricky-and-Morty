import React, { useEffect  , useState} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";


import { addFavorite, deleteFavorite } from "../redux/actions";


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

 const Card = ({ Character , onClose, id }) => {
  const { name, species, gender, image } = Character;

  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites)


  
  
  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      // props.deleteFavorite(props.id);
      dispatch(deleteFavorite(id))
    } else {
      setIsFav(true);
      dispatch(addFavorite(Character))
      // props.addFavorite(props);
    }

  };

  return (
    <Container>
      <Column>
        <Button onClick={() => onClose(id)}>Eliminar</Button>

        {isFav ? (
        <button  onClick={handleFavorite}>❤️</button>
      ) : (
        <button  onClick={handleFavorite}>🤍</button>
      )}

        <Link to= {`/detail/${id}`}> <Name>{name}</Name> </Link>
        <Parrafo>
          {species} & {gender}
        </Parrafo>

        <Image src={image} alt="" />
      </Column>
    </Container>
  );
};

/* export const mapStateToProps= (state) =>{
  return{
     myFavorites: state.myFavorites,
  }
}



export const mapDispatchToProps=(dispatch) =>{
  return{
     addFavorite: function(character){
       dispatch(addFavorite(character))
     },
     deleteFavorite: function(id){
       dispatch(deleteFavorite(id))
     },
  }
} */

export default Card;