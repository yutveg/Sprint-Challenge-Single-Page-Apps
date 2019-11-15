import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width: 40%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(252,150,120,1) 0%, rgba(247,108,127,1) 100.4% );
    border-radius: 2px;
    box-shadow: 2px 2px 3px white;
    font-size: 1rem;
    padding: 2%;
    margin-bottom: 10px;
`

export default function CharacterCard(props) {
  return (
         <Card>
             <h1>Name: {props.name}</h1>
             <h2>Species: {props.species}</h2>
             <h2>From: {props.from} </h2>
         </Card>
         )
}
