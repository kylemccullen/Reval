import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FiDollarSign, FiPercent } from 'react-icons/fi';
import PropTypes from 'prop-types';

import Input from './Input';
import Label from './Label';
import Toggle from '../Toggle';
import { formatValue, calcValueOrPercent } from '../../../helpers';
import { DataContext } from '../../../context/DataContext';

const CustomInput = ({
  name,
  label = null,
  value,
  valueType = 'currency',
  inline = false,
  valueAndPercent = false,
  percentValueOf = null,
}) => {
  const { setDataValue } = useContext(DataContext);
  const [isActive, setIsActive] = useState(false);
  const [editValue, setEditValueX] = useState('');
  const [error, setError] = useState('');
  const [percent, fixedValue, type] = value.split(',');

  const setEditValue = useCallback(
    (newEditValue) => {
      setEditValueX(valueAndPercent ? (type === 'P' ? percent : fixedValue) : newEditValue);
    },
    [setEditValueX, fixedValue, type, valueAndPercent, percent],
  );

  useEffect(() => {
    setEditValue(value);
  }, [value, setEditValue]);

  if (value == undefined) {
    return null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (error.length !== 0) {
      return;
    }

    const newValue = valueAndPercent
      ? type === 'P'
        ? [editValue, fixedValue, type].join(',')
        : [percent, editValue, type].join(',')
      : editValue;

    updateUrlParams(newValue);
    setDataValue(name, newValue);
    setIsActive(false);
  };

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setError('');
    if (valueType !== 'text' && isNaN(newValue)) {
      setError('Must be a valid number.');
    }

    setEditValueX(newValue);
  };

  const onClose = () => {
    setIsActive(false);
    setError('');
    setEditValue(valueAndPercent ? (type === 'P' ? percent : fixedValue) : value);
  };

  const setType = (newType) => {
    const newValue = value.split(',');
    newValue[2] = newType;
    setEditValue(newType === 'P' ? percent : fixedValue);
    setDataValue(name, newValue.join(','));
    updateUrlParams(newValue);
  };

  const toggleType = () => {
    if (type === 'P') {
      setType('V');
    } else {
      setType('P');
    }
  };

  const updateUrlParams = (newValue) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(name, newValue);
    window.history.replaceState({}, '', '?' + urlParams.toString());
  };

  const getFormattedValue = () => {
    if (valueAndPercent) {
      return formatValue(calcValueOrPercent(value, percentValueOf), 'V');
    } else {
      return formatValue(value, valueType);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`form-group ${inline ? 'inline' : ''}`}>
        {label && <Label label={label} name={name} />}
        <div className="d-flex">
          <div className="flex-fill">
            {isActive ? (
              <Input value={editValue} onChange={handleOnChange} error={error} onClose={onClose} />
            ) : (
              <div className="text-value" onClick={() => setIsActive(true)}>
                {getFormattedValue()}
              </div>
            )}
          </div>
          {valueAndPercent && (
            <Toggle
              value={type !== 'P'}
              toggle={toggleType}
              leftIcon={<FiPercent />}
              rightIcon={<FiDollarSign />}
              size={32}
            />
          )}
        </div>
      </div>
    </form>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  valueType: PropTypes.string,
  inline: PropTypes.bool,
  valueAndPercent: PropTypes.bool,
  percentValueOf: PropTypes.number,
};

export default CustomInput;
