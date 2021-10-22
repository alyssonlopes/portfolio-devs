import React from "react";
import PropTypes from "prop-types";

class SubHeader extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </section>
    );
  }
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SubHeader;
