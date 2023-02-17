import React from "react";
import { connect, useSelector } from "react-redux";
import Card from "../Card";
import Favorite from "./Favorite";

/* import Card from "../Card"; */
/* import { orderCards, filterCards } from "../../redux/actions"; */

export function Favorites() {
  
    const myFavorites = useSelector((state) => state.myFavorites)
    
 
  /* function handleClick(e) {
    const { name, value } = e.target;
    if (name === "order") dispatch(orderCards(value));
    if (name === "gender") dispatch(filterCards(value));
  } */
  return (
    <div>
      <select name="order" /* onClick={handleClick} */>
        <option value="" disabled>
          Ordenar...
        </option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>

      <select name="gender" /* onClick={handleClick} */>
        <option value="" disabled>
          Filtrar...
        </option>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknow</option>
      </select>
      <div>
        {myFavorites.length === 0 ? (
          <p>
            ¡Agrega un favorito!
          </p>
        ) : (
          myFavorites.map((e) => (
            <Favorite
                key={e.id}
                Favorite={e}
            />
          ))
        )}
      </div>
    </div>
  );
}


export function mapStateToProps(state) {
    return {
      myFavorites: state.myFavorites,
    };
  }
  
  export default connect(mapStateToProps, null)(Favorites);