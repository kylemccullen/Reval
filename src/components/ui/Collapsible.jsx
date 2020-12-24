import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Collapsible = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="div-link"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ? 'see less' : 'see more'}
      </div>
      <Collapse in={open}>{children}</Collapse>
    </>
  );
};

Collapsible.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Collapsible;
