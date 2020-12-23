import {
  calculateEquityGainYearOne,
  calculateMortgagePayment,
  calcValueOrPercent,
  evaluateData,
  formatValue,
} from './index.js';

describe('formatValue', () => {
  test('format as a currency', () => {
    expect(formatValue(1234.567, 'V')).toBe('$1,234.57');
    expect(formatValue(45632.4, 'currency')).toBe('$45,632.40');
  });

  test('format as a percent', () => {
    expect(formatValue(0.324532, 'P')).toBe('32.453%');
    expect(formatValue(0.4, 'percent')).toBe('40.000%');
  });

  test('format as text', () => {
    expect(formatValue(0.34, 'number')).toBe(0.34);
    expect(formatValue('test text', 'text')).toBe('test text');
  });

  test('format default', () => {
    expect(formatValue(15.6)).toBe('!REF');
  });
});

describe('calcValueOrPercent', () => {
  test('work as percent', () => {
    expect(calcValueOrPercent('0.2,1000.00,P', 500)).toBe(100);
  });

  test('work as value', () => {
    expect(calcValueOrPercent('0.2,1000.00,V', 500)).toBe(1000);
  });
});

describe('calculateMortgagePayment', () => {
  test('test', () => {
    expect(calculateMortgagePayment(100000, 0.04, 30)).toBe(477.42);
  });

  test('test 2', () => {
    expect(calculateMortgagePayment(70000, 0.02, 30)).toBe(258.73);
  });
});

describe('calculateEquityGainYearOne', () => {
  test('test', () => {
    expect(calculateEquityGainYearOne(100000, 0.04 / 12, 30 * 12)).toBeCloseTo(1761.09, 1);
  });

  test('test 2', () => {
    expect(calculateEquityGainYearOne(70000, 0.02 / 12, 30 * 12)).toBeCloseTo(1720.47, 1);
  });
});

describe('evaluateData', () => {
  test('test', () => {
    const data = {
      name: '123 Main St. (Edit me)',
      homeValue: '115000.00',
      purchasePrice: '115000.00',
      downPayment: '0.2,30000.00,P',
      closingCosts: '0.03,2000.00,P',
      additionalCosts: '0',
      rent: '1100.00',
      propertyManager: '0.1,100.00,P',
      leaseLength: '1',
      leaseRenewalFee: '0.25,100.00,P',
      turnover: '3',
      procurementFee: '1.0,1100,P',
      mortgageRate: '0.0425',
      mortgageTerm: '30',
      insurance: '0.007,700.00,P',
      propertyTax: '0.01,1000.00,P',
      vacancyRate: '0.05',
      majorMinorCapEx: '0.1,100,P',
    };

    const [evalData] = evaluateData(data);

    expect(evalData.additionalCosts).toBe(0);
    expect(evalData.additionalPropertyManagementExpense).toBe(53.47);
    expect(evalData.cashFlow).toBe(374.5);
    expect(evalData.cashOnCash).toBe(0.17);
    expect(evalData.closingCosts).toBe(3450);
    expect(evalData.downPayment).toBe(23000);
    expect(evalData.equityYearOne).toBeCloseTo(1550.94, 0);
    expect(evalData.insurance).toBe(805);
    expect(evalData.leaseLength).toBe(1);
    expect(evalData.leaseRenewalFee).toBe(275);
    expect(evalData.majorMinorCapEx).toBe(110);
    expect(evalData.mediumReturn).toBe(0.071);
    expect(evalData.mediumTerm).toBe(156.03);
    expect(evalData.mortgagePayment).toBe(452.58);
    expect(evalData.mortgageRate).toBe(0.0425);
    expect(evalData.mortgageTerm).toBe(30);
    expect(evalData.procurementFee).toBe(1100);
    expect(evalData.propertyTax).toBe(1150);
    expect(evalData.purchasePrice).toBe(115000);
    expect(evalData.rent).toBe(1100);
    expect(evalData.turnover).toBe(3);
    expect(evalData.upFrontCost).toBe(26450);
    expect(evalData.vacancyRate).toBe(0.05);
  });
});
