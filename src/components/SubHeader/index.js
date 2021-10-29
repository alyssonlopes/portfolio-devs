import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const SubHeader = ({ title, description }) => {
  return (
    <section className="subheader-container">
      <h2 className="subheader-title">{title}</h2>
      <p className="subheader-subtitle">{description}</p>
    </section>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SubHeader;
