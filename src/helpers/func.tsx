import { FULL_YEAR_DISCOUNT, amountData } from ".";
import { Bundle, Extras } from "../types";

export const shortBundle = (bundle: Bundle) =>
  bundle === "monthly" ? "mo" : "yr";

export const multiplyFactor = (bundle: Bundle) =>
  bundle === "monthly" ? 1 : FULL_YEAR_DISCOUNT;

export const calculatePrice = (data: number, bundle: Bundle) =>
  data * multiplyFactor(bundle);

export const addOnPrice = (type: Extras, bundle: Bundle) => {
  const price = calculatePrice(amountData.addons[type], bundle);
  return (
    <>
      +${price}/{shortBundle(bundle)}
    </>
  );
};
