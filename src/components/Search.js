import React from "react";
import "./../styling/style.css";
function Search(props) {
  return (
    <div className="row input-group mb-3 justify-content-center">
      <div className="resultsTable">
        <input
          type="text"
          name="search"
          value={props.search}
          className="form-control"
          id="search"
          placeholder="Search for Employee"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={props.handleInputChange}
        />
      </div>
    </div>
  );
}

export default Search;
