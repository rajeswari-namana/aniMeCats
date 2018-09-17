import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid silver",
        height: "500px",
        margin: "30px",
        padding: "30px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
