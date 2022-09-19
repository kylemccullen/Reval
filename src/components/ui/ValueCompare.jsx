import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DataContext } from '../../context/DataContext';
import { formatValue } from '../../helpers';

const increaseCompareGood = [
  'homeValue',
  'rent',
  'term',
  'cashFlow',
  'cashOnCash',
  'equityYearOne',
  'mediumTerm',
  'mediumReturn',
];

const ValueCompare = ({ name, valueType }) => {
  const { evalData, valueCompare } = useContext(DataContext);
  if (valueCompare === null || name === 'name') {
    return null;
  }

  const result = evalData[name] - valueCompare[name];

  if (result === 0) {
    return null;
  }

  let isGood = false;
  const isIncreaseGood = increaseCompareGood.includes(name);
  if ((result > 0 && isIncreaseGood) || (result < 0 && !isIncreaseGood)) {
    isGood = true;
  }

  return (
    <span className={`pl-2 ${isGood ? 'text-success' : 'text-danger'}`}>
      {result > 0 ? '+' : ''}
      {formatValue(result, valueType)}
    </span>
  );
};

ValueCompare.propTypes = {
  name: PropTypes.string.isRequired,
  valueType: PropTypes.string.isRequired,
};

export default ValueCompare;
