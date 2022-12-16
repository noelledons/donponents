import React from "react";
import "./Card.scss";

const Card = ({ position, title, description }) => {
  return (
    <div className="cards">
      <div className="cards__body">
        <h5 className="cards__number">{position}</h5>
        <h5 className="cards__title">{title}</h5>
        <p className="cards__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
