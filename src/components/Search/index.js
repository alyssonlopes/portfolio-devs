import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Search = ({ onChange }) => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Pesquise..." onChange={onChange} />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
