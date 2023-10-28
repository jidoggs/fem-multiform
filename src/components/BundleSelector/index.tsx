import clsx from "clsx";
import React, { useRef, useState } from "react";

type desc = "monthly" | "yearly";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: desc;
}

interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: desc;
}

function Button({ value, name, children, ...props }: iButton) {
  return (
    <button
      {...props}
      name={name}
      className={clsx(
        "text-sm font-medium text-themeGray-10 capitalize p-0 border-none ",
        value === name ? "text-themeNavyBlue" : ""
      )}
    >
      {name}
    </button>
  );
}

function BundleSelector({ value, ...props }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [checking, setChecking] = useState<desc>("monthly");
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name: desc = e.currentTarget.name as desc;
    setChecking(name);
  };
  const changeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const name: desc = e.currentTarget.dataset.item as desc;
    setChecking(name === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="flex items-center justify-center gap-x-6 pt-3.5 pb-3 px-14 w-full rounded-xl bg-[#D9D9D9]">
      <Button onClick={clickHandler} value={checking} name="monthly">
        Monthly
      </Button>

      <div className="relative">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className="sr-only"
          checked={checking === "yearly"}
        />
        <div
          data-item={checking}
          onClick={changeHandler}
          className={`toggle-bg !m-0 h-5 w-10 cursor-pointer rounded-full border-2 border-themeNavyBlue bg-themeNavyBlue`}
        />
      </div>
      <Button onClick={clickHandler} value={checking} name="yearly">
        Yearly
      </Button>
    </div>
  );
}

export default BundleSelector;
