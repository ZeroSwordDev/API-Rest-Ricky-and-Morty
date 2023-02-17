import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const Detail = () => {
  const params = useParams();
  const [characterDetail, setCharacterDetail] = useState(params);
  const [characterDetailValue, setCharacterDetailValue] = useState([]);
  
  

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${characterDetail.detailId}`
    )
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
            setCharacterDetailValue([char]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

  }, [characterDetail.detailId]);


  return (
    <div>
        {
         characterDetailValue?.map(item => 
            (<DetailCard 
            key={item.id}
            characterDetailValue={item}
            />
           ))
        }
    </div>
  );
};

export default Detail;
