import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";



export default function CharacterCard(props) {
  return (
         <div>
             <h1>Name: {props.name}</h1>
             <h2>Species: {props.species}</h2>
             <h2>From: {props.from} </h2>
         </div>
         )
}
