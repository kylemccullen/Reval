import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { evaluateData } from "../helpers";

export const DataContext = createContext();

const defaults = {
  name: "123 Main St. (Edit me)",
  homeValue: "115000.00",
  purchasePrice: "115000.00",
  downPayment: "0.2,30000.00,P",
  closingCosts: "0.03,2000.00,P",
  additionalCosts: "0",
  rent: "1100.00",
  propertyManager: "0.1,100.00,P",
  leaseLength: "1",
  leaseRenewalFee: "0.25,100.00,P",
  turnover: "3",
  procurementFee: "1.0,1100,P",
  mortgageRate: "0.0425",
  mortgageTerm: "30",
  insurance: "0.007,700.00,P",
  propertyTax: "0.01,1000.00,P",
  vacancyRate: "0.05",
  majorMinorCapEx: "0.1,100,P",
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaults);
  const [evalData, setEvalData] = useState({});
  const [warnings, setWarnings] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialData = {};
    Object.keys(defaults).forEach((key) => {
      initialData[key] = urlParams.get(key)
        ? urlParams.get(key)
        : defaults[key];
    });
    evaluate(initialData);
  }, []);

  const setDataValue = (name, value) => {
    const updatedData = {
      ...data,
      [name]: value,
    };
    evaluate(updatedData);
  };

  const evaluate = (data) => {
    setData(data);
    const [evalData, evalWarnings] = evaluateData(data);
    setEvalData(evalData);
    setWarnings(evalWarnings);
  };

  return (
    <DataContext.Provider value={{ data, setDataValue, evalData, warnings }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
