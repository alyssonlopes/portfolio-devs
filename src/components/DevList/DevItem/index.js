import React from "react";
import PropTypes from "prop-types";

class DevItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.photo && (
          <img src={this.props.photo} alt={this.props.name} />
        )}

        <div>
          <p>{this.props.name}</p>
          <p>{this.props.expertise}</p>
        </div>
      </li>
    );
  }
}

DevItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  expertise: PropTypes.string.isRequired,
};

export default DevItem;
