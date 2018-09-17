import React from "react";

const Card = ({ email, name, id }) => {
  return (
    <div className="tc bg-washed-red dib br3 pa4 ma3 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?set=set4`}
        alt="robots"
        width="200"
        heigth="200"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
