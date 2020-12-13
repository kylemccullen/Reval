import React, { useContext } from "react";

import Input from "../ui/Input";
import StaticField from "../ui/StaticField";
import { DataContext } from "../../context/DataContext";

const Investment = () => {
  const { data, evalData } = useContext(DataContext);

  return (
    <>
      <div className="section">
        <Input name="homeValue" label="Home Value" value={data.homeValue} />
        <Input
          name="purchasePrice"
          label="Purchase Price"
          value={data.purchasePrice}
        />
      </div>
      <div className="section">
        <Input
          name="downPayment"
          label="Down Payment"
          value={data.downPayment}
          percentValueOf={evalData.purchasePrice}
          valueAndPercent
        />
        <Input
          name="closingCosts"
          label="Closing Costs"
          value={data.closingCosts}
          percentValueOf={evalData.purchasePrice}
          valueAndPercent
        />
        <Input
          name="additionalCosts"
          label="Additional Costs"
          value={data.additionalCosts}
        />
      </div>
      <div className="section">
        <StaticField
          name="upFrontCost"
          label="Up Front Cost"
          value={evalData.upFrontCost}
        />
      </div>
    </>
  );
};

export default Investment;
