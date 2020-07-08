import React from "react";

import Character from "../character/Character";

import "./characters.style.css";

const Characters = ({ characters }) => {
  return (
    <div className="list">
      {characters &&
        characters.map((character) => {
          return <Character key={character.url} data={character} />;
        })}
    </div>
  );
};

export default Characters;
