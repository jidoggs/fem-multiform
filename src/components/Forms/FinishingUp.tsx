import { useContext } from "react";
import CustomSectionTitle from "../CustomSectionTitle";
import { DataContext } from "../../AppContext";
import {
  addOnPrice,
  addOnsInfo,
  amountData,
  calculatePrice,
  shortBundle,
} from "../../helpers";
import { ContextData } from "../../types";

function FinishingUp() {
  const { data, changePlanHandler } = useContext(DataContext) as ContextData;
  const { addons, plan } = data;
  const fullBundle = plan.bundle;
  const bundle = shortBundle(fullBundle);
  const planPrice = calculatePrice(amountData.plan[plan.type], fullBundle);

  const addOnsData = addOnsInfo.cards
    .map((itm) => ({
      ...itm,
      price: calculatePrice(amountData.addons[itm.type], fullBundle),
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
      <div className="flex flex-col md:mt-4 p-4 gap-y-4 md:gap-y-5 md:pt-5 md:p-6  text-sm md:text-base font-medium bg-themeGray-40 rounded-lg">
        <div className="pb-3.5 md:pb-6 flex items-center justify-between border-b border-themeGray-20">
          <div className="flex flex-col gap-y-0.5 md:gap-y-1.5 text-themeNavyBlue items-start">
            <h4 className="text-themeNavyBlue capitalize">{`${plan.type} (${fullBundle})`}</h4>
            <button
              className="p-0 text-themeGray-10 underline text-sm hover:text-themeBlue"
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
            className="flex items-center justify-between text-sm font-medium md:font-normal"
          >
            <h5 className="text-themeGray-10">{title}</h5>
            <p className="text-themeNavyBlue">{itmPrice}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3.5 md:px-6">
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
