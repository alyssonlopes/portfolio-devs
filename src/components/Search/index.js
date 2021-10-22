import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Pesquisa"
        onChange={this.props.onChange}
      />
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
