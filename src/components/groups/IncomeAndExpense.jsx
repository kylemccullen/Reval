import React, { useContext } from "react";

import Input from "../ui/Input";
import StaticField from "../ui/StaticField";
import Collapsible from "../ui/Collapsible";
import { DataContext } from "../../context/DataContext";

const IncomeAndExpense = () => {
  const { data, evalData } = useContext(DataContext);

  return (
    <>
      <div className="section">
        <Input name="rent" label="Rent" value={data.rent} />
      </div>
      <div className="section">
        <div className="collapsible">
          <Input
            name="propertyManager"
            label="Property Manager"
            value={data.propertyManager}
            percentValueOf={evalData.rent}
            valueAndPercent
          />
          <Collapsible>
            <div className="indent">
              <Input
                name="leaseLength"
                label="Lease Length"
                value={data.leaseLength}
                valueType="number"
                inline
              />
              <Input
                name="leaseRenewalFee"
                label="Lease Renewal Fee"
                value={data.leaseRenewalFee}
                percentValueOf={evalData.rent}
                valueAndPercent
              />
              <Input
                name="turnover"
                label="Turnover"
                value={data.turnover}
                valueType="number"
                inline
              />
              <Input
                name="procurementFee"
                label="ProcurementFee"
                value={data.procurementFee}
                percentValueOf={evalData.rent}
                valueAndPercent
              />
              <StaticField
                name="additionalPropertyManagementExpense"
                label="Additional Cost"
                value={evalData.additionalPropertyManagementExpense}
              />
            </div>
          </Collapsible>
        </div>
        <div>
          <div className="collapsible">
            <StaticField
              name="mortgagePayment"
              label="Mortgage"
              value={evalData.mortgagePayment}
            />
            <Collapsible>
              <div className="indent">
                <Input
                  name="mortgageRate"
                  label="Rate"
                  value={data.mortgageRate}
                  valueType="percent"
                  inline
                />
                <Input
                  name="mortgageTerm"
                  label="Term"
                  value={data.mortgageTerm}
                  valueType="number"
                  inline
                />
              </div>
            </Collapsible>
          </div>
          <Input
            name="insurance"
            label="Insurance"
            value={data.insurance}
            percentValueOf={evalData.purchasePrice}
            valueAndPercent
          />
          <Input
            name="propertyTax"
            label="Property Taxes"
            value={data.propertyTax}
            percentValueOf={evalData.purchasePrice}
            valueAndPercent
          />
        </div>
      </div>
    </>
  );
};

export default IncomeAndExpense;
