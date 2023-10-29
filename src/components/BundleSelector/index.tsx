import React, { useContext } from "react";
import clsx from "clsx";
import { DataContext } from "../../AppContext";
import { Bundle, ContextData } from "../../types";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: Bundle;
}

function Button({ value, name, children, ...props }: iButton) {
  return (
    <button
      {...props}
      name={name}
      type="button"
      className={clsx(
        "text-sm font-medium md:font-normal capitalize p-0 border-none",
        value === name ? "text-themeNavyBlue" : "text-themeGray-10"
      )}
    >
      {name}
    </button>
  );
}

function BundleSelector({ ...props }: Props) {
  const { data, bundleHandler } = useContext(DataContext) as ContextData;
  const { bundle } = data.plan;
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name: Bundle = e.currentTarget.name as Bundle;
    bundleHandler(name);
  };
  const changeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const name: Bundle = e.currentTarget.dataset.item as Bundle;
    bundleHandler(name === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="flex items-center justify-center gap-x-6 pt-3.5 pb-3 px-14 md:py-3.5 w-full rounded-xl bg-themeGray-40">
      <Button onClick={clickHandler} value={bundle} name="monthly">
        Monthly
      </Button>

      <div className="relative">
        <input
          {...props}
          type="checkbox"
          className="sr-only"
          checked={bundle === "yearly"}
          readOnly
        />
        <div
          data-item={bundle}
          onClick={changeHandler}
          className={`toggle-bg !m-0 h-5 w-10 cursor-pointer rounded-full border-2 border-themeNavyBlue bg-themeNavyBlue`}
        />
      </div>
      <Button onClick={clickHandler} value={bundle} name="yearly">
        Yearly
      </Button>
    </div>
  );
}

export default BundleSelector;
