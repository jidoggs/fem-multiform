import { useContext } from "react";
import CustomSectionTitle from "../CustomSectionTitle";
import { DataContext } from "../../AppContext";
import {
  addOnPrice,
  addOnsInfo,
  amountData,
  multiplyFactor,
  shortBundle,
} from "../../helpers";
import { ContextData } from "../../types";

function FinishingUp() {
  const { data, changePlanHandler } = useContext(DataContext) as ContextData;
  const { addons, plan } = data;
  const fullBundle = plan.bundle;
  const bundle = shortBundle(fullBundle);
  const planPrice = amountData.plan[plan.type] * multiplyFactor(fullBundle);

  const addOnsData = addOnsInfo.cards
    .map((itm) => ({
      ...itm,
      price: amountData.addons[itm.type] * multiplyFactor(fullBundle),
      isActive: addons[itm.type],
      itmPrice: addOnPrice(itm.type, fullBundle),
    }))
    .filter(({ isActive }) => isActive);

  const addOnsSum = addOnsData.reduce((a, b) => a + b.price, 0);

  const totalAmount = planPrice + addOnsSum;

  return (
    <div className="flex flex-col gap-y-6">
      <CustomSectionTitle
        title="Finishing up"
        sub="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col p-4 gap-y-4 text-sm font-medium bg-themeGray-40 rounded-lg">
        <div className="pb-3.5 flex items-center justify-between border-b border-themeGray-20">
          <div className="flex flex-col gap-y-0.5 text-themeNavyBlue items-start">
            <h4 className="text-themeNavyBlue capitalize">{`${plan.type} (${fullBundle})`}</h4>
            <button
              className="p-0 text-themeGray-10 underline"
              onClick={changePlanHandler}
            >
              Change
            </button>
          </div>
          <p className="text-themeNavyBlue">
            ${planPrice}/{bundle}
          </p>
        </div>

        {addOnsData.map(({ type, title, itmPrice }) => (
          <div
            key={type}
            className="flex items-center justify-between text-sm font-medium"
          >
            <h5 className="text-themeGray-10">{title}</h5>
            <p className="text-themeNavyBlue">{itmPrice}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3.5">
        <h2 className="text-sm font-medium text-themeNavyBlue">
          {`Total (per ${fullBundle})`}
        </h2>
        <p className="text-base font-bold text-themeBlue">
          ${totalAmount}/{bundle}
        </p>
      </div>
    </div>
  );
}

export default FinishingUp;
