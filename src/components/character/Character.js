import React from "react";

import "./character.style.css";

const Character = ({ data }) => {
  return (
    <div className="character">
      <div className="card">
        <h3 className="name">{data.aliases}</h3>
        <h5 className="gender">Gender: {data.gender}</h5>
        <h5 className="culture">
          Culture: {data.culture ? data.culture : "Not Available"}
        </h5>
      </div>
    </div>
  );
};

export default Character;
