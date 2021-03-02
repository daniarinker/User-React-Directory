import React from "react";
import "./../styling/style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Click the titles on the header to arrange alphabetically.
      </p>
    </div>
  );
}

export default Jumbotron;
