import clsx from "clsx";
import { useState } from "react";
import { iHandleBlur, iHandleChange } from "../../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function CustomInput({ label, className, onChange, ...props }: Props) {
  const [validity, setValidity] = useState(true);

  const blurHandler: iHandleBlur = (e) => {
    if (e.target.checkValidity()) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const changeHandler: iHandleChange = (e) => {
    if (!onChange) return;
    onChange(e);
    if (e.target.checkValidity()) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  return (
    <label className="inline-flex flex-col gap-y-1 md:gap-y-2">
      <span className="inline-flex items-center justify-between">
        <span className="inline-block text-sm text-themeNavyBlue font-medium leading-none">
          {label}
        </span>
        {!validity ? (
          <span className="text-themeRed text-sm font-bold leading-none">
            This Field is required
          </span>
        ) : null}
      </span>
      <input
        {...props}
        autoComplete="new-password"
        onBlur={blurHandler}
        onChange={changeHandler}
        className={clsx(
          "py-3 px-4 md:px-4 md:py-3.5 rounded-lg border border-themeGray-10 w-full placeholder:text-themeGray-10 leading-tight focus:border-themeBlue focus:outline-none text-themeNavyBlue font-bold autofill:text-themeNavyBlue autofill:bg-white",
          !validity ? "border-themeRed" : "",
          className
        )}
      />
    </label>
  );
}

export default CustomInput;
