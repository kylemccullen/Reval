import React, { useContext } from 'react';
import { FiAlertTriangle, FiInfo } from 'react-icons/fi';
import { AiFillThunderbolt } from 'react-icons/ai';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import { DataContext } from '../../../context/DataContext';
import info from '../../../data/info.json';

const Label = ({ label, name, isStatic = false }) => {
  const { warnings } = useContext(DataContext);

  return (
    <label>
      <span>{label}</span>
      {isStatic && (
        <Tooltip title="Static Field" icon={<AiFillThunderbolt />} iconClass="text-muted">
          <span>This field is static and can&apos;t be changed</span>
        </Tooltip>
      )}
      {info[name] !== undefined && (
        <Tooltip title="Info" icon={<FiInfo />} iconClass="text-muted">
          <span>{info[name]}</span>
        </Tooltip>
      )}
      {warnings[name] !== undefined && (
        <Tooltip title="Warning" icon={<FiAlertTriangle />} iconClass="text-warning">
          <span>{warnings[name]}</span>
        </Tooltip>
      )}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isStatic: PropTypes.bool,
};

export default Label;
