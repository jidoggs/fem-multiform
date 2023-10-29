import { useContext } from "react";
import clsx from "clsx";
import { DataContext } from "../../AppContext";
import { ContextData, Plan } from "../../types";
import {
  FULL_YEAR_DISCOUNT,
  amountData,
  calculatePrice,
  shortBundle,
} from "../../helpers";

type Props = {
  logo: any;
  title: Plan;
};

function CustomBundleCard({ logo, title }: Props) {
  const { data, selectPlanHandler } = useContext(DataContext) as ContextData;
  const { bundle, type } = data.plan;
  const clickHandler = () => selectPlanHandler(title);
  const amount = calculatePrice(amountData.plan[title], bundle);
  const shtBundle = shortBundle(bundle);
  const isSelected = title === type;
  return (
    <div
      className={clsx(
        "p-4 pb-5 border rounded-lg flex items-start gap-x-3.5 lg:flex-col gap-y-11 cursor-pointer",
        isSelected
          ? "border-themeBlue bg-themeGray-40"
          : "border-themeGray-20 bg-white"
      )}
      onClick={clickHandler}
    >
      <img src={logo} alt={`${title}`} className="w-10 h-10" />
      <div className="flex flex-col gap-y-1.5">
        <h4 className="text-base font-medium text-themeNavyBlue leading-none capitalize">
          {title}
        </h4>
        <p className="text-sm font-normal text-themeGray-10 leading-none">
          ${amount}/{shtBundle}
        </p>
        {bundle === "yearly" ? (
          <p className="text-sm leading-none text-themeNavyBlue">
            {12 - FULL_YEAR_DISCOUNT} months free
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default CustomBundleCard;
