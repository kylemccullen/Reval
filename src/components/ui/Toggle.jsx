import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ value, toggle, leftIcon, rightIcon, size = 40 }) => {
  const styles = { height: `${size}px`, width: `${size}px`, padding: 0 };

  return (
    <div className="btn-group">
      <button
        className={`btn btn-outline-primary icon ${value ? "" : "active"}`}
        type="button"
        style={styles}
        onClick={() => (value ? toggle() : null)}
      >
        {leftIcon}
      </button>
      <button
        className={`btn btn-outline-primary icon ${value ? "active" : ""}`}
        type="button"
        style={styles}
        onClick={() => (!value ? toggle() : null)}
      >
        {rightIcon}
      </button>
    </div>
  );
};

Toggle.propTypes = {
  value: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  leftIcon: PropTypes.node.isRequired,
  rightIcon: PropTypes.node.isRequired,
  size: PropTypes.number,
};

export default Toggle;
