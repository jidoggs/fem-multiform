import { useContext } from "react";
import clsx from "clsx";
import { DataContext } from "../../AppContext";
import CustomCheckBox from "../CustomCheckbox";
import { ContextData, Extras } from "../../types";
import { amountData, calculatePrice, shortBundle } from "../../helpers";

type Props = {
  title: string;
  sub: string;
  type: Extras;
};

function AddOnCard({ sub, title, type }: Props) {
  const { data, addOnChangeHandler } = useContext(DataContext) as ContextData;
  const isChecked = data.addons[type];
  const bundle = shortBundle(data.plan.bundle);
  const price = calculatePrice(amountData.addons[type], data.plan.bundle);
  return (
    <div
      className={clsx(
        "flex pt-3.5 pb-2.5 px-4 md:py-5 md:px-6 border rounded-lg items-center gap-x-[18px] lg:gap-x-6",
        isChecked
          ? "border-themeBlue bg-themeGray-40"
          : "border-themeGray-10 bg-white hover:border-themeBlue cursor-pointer"
      )}
    >
      <CustomCheckBox
        checked={isChecked}
        name={type}
        onChange={addOnChangeHandler}
      />
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col gap-y-1.5 font-medium">
          <h4 className="text-themeNavyBlue text-sm leading-none md:text-base md:leading-none">
            {title}
          </h4>
          <p className="text-themeGray-10 text-xs leading-none md:text-sm md:leading-4">
            {sub}
          </p>
        </div>
        <p className="text-sm font-normal leading-none text-themeBlue">
          +${price}/{bundle}
        </p>
      </div>
    </div>
  );
}

export default AddOnCard;
