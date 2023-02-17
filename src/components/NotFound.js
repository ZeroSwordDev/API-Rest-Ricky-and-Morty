import React from 'react';
import styled from 'styled-components';

const ERROR404 = styled.h1`
color: red;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
font-size: 200px;
`

const NotFound = () => {
    return ( <ERROR404>ERROR 404</ERROR404> );
}
 
export default NotFound;