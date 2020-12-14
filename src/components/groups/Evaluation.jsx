import React, { useContext } from "react";

import StaticField from "../ui/StaticField";
import Input from "../ui/Input";
import { DataContext } from "../../context/DataContext";

const Evaluation = () => {
  const { data, evalData } = useContext(DataContext);
  return (
    <>
      <div className="section">
        <StaticField
          name="cashFlow"
          label="Cash Flow"
          value={evalData.cashFlow}
        />
        <StaticField
          name="cashOnCash"
          label="Cash on Cash"
          value={evalData.cashOnCash}
          type="percent"
        />
        <StaticField
          name="equityYearOne"
          label="Equity Y1"
          value={evalData.equityYearOne}
        />
      </div>
      <div className="section">
        <Input
          name="vacancyRate"
          label="Vacancy Rate"
          value={data.vacancyRate}
          valueType="percent"
        />
        <Input
          name="majorMinorCapEx"
          label="Major Minor CapEx"
          value={data.majorMinorCapEx}
          percentValueOf={evalData.rent}
          valueAndPercent
        />
        <StaticField
          name="mediumTerm"
          label="Medium Term"
          value={evalData.mediumTerm}
        />
        <StaticField
          name="mediumReturn"
          label="Medium Return"
          value={evalData.mediumReturn}
          type="percent"
        />
      </div>
    </>
  );
};

export default Evaluation;
