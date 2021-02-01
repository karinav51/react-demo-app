import React from "react";

function Welcome(props) {
  console.log(props);
  let name = "";
  if (props.match) {
    name = props.match.params.name;
  } else {
    name = props.name;
  }
  return <div className="Welcome"> Welcome, {name}!</div>;
}

export default Welcome;
