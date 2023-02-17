import React from 'react';
import styled from 'styled-components';
import Card from './Card'


const DivContainer = styled.div`


height: 100vh;
width: 90%;
margin: 50px 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:50px;
`


const Cards = ({Character, setCharacter}) => {


     const onClose = (id) => {
        
        setCharacter(
            Character.filter(i => i.id !== id)
         )
     }

    return ( 
        <DivContainer>
            {
                Character?.map(item => (
                    <Card 
                    key={item.id}
                    id={item.id}
                    Character={item}
                    onClose={onClose}
                    />
                ))
            }
        </DivContainer>
     );
}


export default Cards;