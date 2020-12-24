import React from 'react';
import PropTypes from 'prop-types';

import Label from './Input/Label';
import ValueCompare from './ValueCompare';
import { formatValue } from '../../helpers';

const StaticField = ({ name, value, label, type = 'currency' }) => (
  <div className="form-group">
    <Label label={label} name={name} isStatic />
    <div className="text-value static">
      {formatValue(value, type)}
      <ValueCompare name={name} valueType={type} />
    </div>
  </div>
);

StaticField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default StaticField;
