export const formatValue = (value, type) => {
  switch (type) {
    case "V":
    case "currency":
      return parseFloat(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    case "P":
    case "percent":
      return `${(parseFloat(value) * 100).toFixed(3)}%`;
    case "number":
    case "text":
      return value;
    default:
      return "!REF";
  }
};

export const calcValueOrPercent = (value, valueOf) => {
  const [percent, fixedValue, type] = value.split(",");

  return type === "P" ? parseFloat(percent) * valueOf : parseFloat(fixedValue);
};

const calculateMortgagePayment = (p, r, t) => {
  return (
    (p * (r / 12) * Math.pow(1 + r / 12, 12 * t)) /
    (Math.pow(1 + r / 12, 12 * t) - 1)
  );
};

const calculateEquityGainYearOne = (p, r, n) => {
  return (
    p *
    (1 - (Math.pow(1 + r, n) - Math.pow(1 + r, 12)) / (Math.pow(1 + r, n) - 1))
  );
};

export const evaluateData = (data) => {
  const evalData = {
    purchasePrice: parseFloat(data.purchasePrice),
    additionalCosts: parseFloat(data.additionalCosts),
    rent: parseFloat(data.rent),
    mortgageRate: parseFloat(data.mortgageRate),
    mortgageTerm: parseFloat(data.mortgageTerm),
    leaseLength: parseFloat(data.leaseLength),
    turnover: parseFloat(data.turnover),
    vacancyRate: parseFloat(data.vacancyRate),
  };
  evalData.downPayment = calcValueOrPercent(
    data.downPayment,
    evalData.purchasePrice
  );
  evalData.closingCosts = calcValueOrPercent(
    data.closingCosts,
    evalData.purchasePrice
  );
  evalData.upFrontCost =
    evalData.downPayment + evalData.closingCosts + evalData.additionalCosts;
  evalData.propertyManager = calcValueOrPercent(
    data.propertyManager,
    evalData.rent
  );
  evalData.loanBalance = evalData.purchasePrice - evalData.downPayment;
  evalData.mortgagePayment = calculateMortgagePayment(
    evalData.loanBalance,
    evalData.mortgageRate,
    evalData.mortgageTerm
  );
  evalData.insurance = calcValueOrPercent(
    data.insurance,
    evalData.purchasePrice
  );
  evalData.propertyTax = calcValueOrPercent(
    data.propertyTax,
    evalData.purchasePrice
  );
  evalData.cashFlow =
    evalData.rent -
    evalData.propertyManager -
    evalData.mortgagePayment -
    (evalData.insurance + evalData.propertyTax) / 12;
  evalData.cashOnCash = (evalData.cashFlow * 12) / evalData.upFrontCost;
  evalData.leaseRenewalFee = calcValueOrPercent(
    data.leaseRenewalFee,
    evalData.rent
  );
  evalData.procurementFee = calcValueOrPercent(
    data.procurementFee,
    evalData.rent
  );
  evalData.additionalPropertyManagementExpense =
    (evalData.leaseRenewalFee / evalData.leaseLength +
      evalData.procurementFee / evalData.turnover) /
    12;
  evalData.equityYearOne = calculateEquityGainYearOne(
    evalData.loanBalance,
    evalData.mortgageRate / 12,
    evalData.mortgageTerm * 12
  );
  evalData.majorMinorCapEx = calcValueOrPercent(
    data.majorMinorCapEx,
    evalData.rent
  );
  evalData.mediumTerm =
    evalData.cashFlow -
    evalData.additionalPropertyManagementExpense -
    evalData.rent * evalData.vacancyRate -
    evalData.majorMinorCapEx;

  const warnings = {};
  if (evalData.downPayment / 0.2 < evalData.purchasePrice) {
    warnings.downPayment =
      "Most lenders require a down payment of at least 20%.";
  }
  if (evalData.mortgageTerm < 1) {
    warnings.equityYearOne =
      "Can't calculate equity gained in the first year if the mortgage term is less than one year.";
  }

  return [evalData, warnings];
};
