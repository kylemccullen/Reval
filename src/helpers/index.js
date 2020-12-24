const round = (value, decimal = 2) => {
  return parseFloat(value.toFixed(decimal));
};

export const formatValue = (value, type) => {
  switch (type) {
    case 'V':
    case 'currency':
      return parseFloat(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    case 'P':
    case 'percent':
      return `${(parseFloat(value) * 100).toFixed(3)}%`;
    case 'number':
    case 'text':
      return value;
    default:
      return '!REF';
  }
};

export const calcValueOrPercent = (value, valueOf) => {
  const [percent, fixedValue, type] = value.split(',');

  return type === 'P' ? parseFloat(percent) * valueOf : parseFloat(fixedValue);
};

export const calculateMortgagePayment = (p, r, t) => {
  const mortgagePayment =
    (p * (r / 12) * Math.pow(1 + r / 12, 12 * t)) / (Math.pow(1 + r / 12, 12 * t) - 1);
  return round(mortgagePayment);
};

export const calculateEquityGainYearOne = (p, r, n) => {
  const equity = p * (1 - (Math.pow(1 + r, n) - Math.pow(1 + r, 12)) / (Math.pow(1 + r, n) - 1));
  return round(equity);
};

export const evaluateData = (data) => {
  const homeValue = parseFloat(data.homeValue);
  const purchasePrice = parseFloat(data.purchasePrice);
  const additionalCosts = parseFloat(data.additionalCosts);
  const rent = parseFloat(data.rent);
  const mortgageRate = parseFloat(data.mortgageRate);
  const mortgageTerm = parseFloat(data.mortgageTerm);
  const leaseLength = parseFloat(data.leaseLength);
  const turnover = parseFloat(data.turnover);
  const vacancyRate = parseFloat(data.vacancyRate);
  const downPayment = calcValueOrPercent(data.downPayment, purchasePrice);
  const closingCosts = calcValueOrPercent(data.closingCosts, purchasePrice);
  const upFrontCost = downPayment + closingCosts + additionalCosts;
  const propertyManager = calcValueOrPercent(data.propertyManager, rent);
  const loanBalance = purchasePrice - downPayment;
  const mortgagePayment = calculateMortgagePayment(loanBalance, mortgageRate, mortgageTerm);
  const insurance = calcValueOrPercent(data.insurance, purchasePrice);
  const propertyTax = calcValueOrPercent(data.propertyTax, purchasePrice);
  const cashFlow = round(rent - propertyManager - mortgagePayment - (insurance + propertyTax) / 12);
  const cashOnCash = round((cashFlow * 12) / upFrontCost, 3);
  const leaseRenewalFee = calcValueOrPercent(data.leaseRenewalFee, rent);
  const procurementFee = calcValueOrPercent(data.procurementFee, rent);
  const additionalPropertyManagementExpense = round(
    (leaseRenewalFee / leaseLength + procurementFee / turnover) / 12,
  );
  const equityYearOne = calculateEquityGainYearOne(
    loanBalance,
    mortgageRate / 12,
    mortgageTerm * 12,
  );
  const majorMinorCapEx = calcValueOrPercent(data.majorMinorCapEx, rent);
  const mediumTerm = round(
    cashFlow - additionalPropertyManagementExpense - rent * vacancyRate - majorMinorCapEx,
  );
  const mediumReturn = round((mediumTerm * 12) / upFrontCost, 3);

  const warnings = {};
  if (downPayment / 0.2 < purchasePrice) {
    warnings.downPayment = 'Most lenders require a down payment of at least 20%.';
  }
  if (mortgageTerm < 1) {
    warnings.equityYearOne =
      "Can't calculate equity gained in the first year if the mortgage term is less than one year.";
  }

  const evalData = {
    homeValue,
    purchasePrice,
    additionalCosts,
    rent,
    mortgageRate,
    mortgageTerm,
    leaseLength,
    turnover,
    vacancyRate,
    downPayment,
    closingCosts,
    upFrontCost,
    propertyManager,
    mortgagePayment,
    insurance,
    propertyTax,
    cashFlow,
    cashOnCash,
    leaseRenewalFee,
    procurementFee,
    additionalPropertyManagementExpense,
    equityYearOne,
    majorMinorCapEx,
    mediumTerm,
    mediumReturn,
  };

  return [evalData, warnings];
};
