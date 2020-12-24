import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../context/ThemeContext';

const Input = ({ value, onChange, error, onClose }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="d-flex flex-direction-row align-items-center">
        <input
          className={`form-control${error.length !== 0 ? 'is-invalid ' : ''} ${
            isDarkMode ? ' bg-dark text-light' : ''
          }`}
          type="text"
          value={value}
          onChange={onChange}
        />
        <span className="close-input" onClick={onClose}>
          <FiX />
        </span>
      </div>
      {error.length !== 0 && <div className="invalid-feedback">{error}</div>}
    </>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Input;
