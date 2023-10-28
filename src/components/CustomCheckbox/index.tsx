import React, { useId, useRef, useState } from "react";
import clsx from "clsx";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  text_left?: boolean;
  label?: string;
  checked: boolean;
  sclassName?: string;
  labelClassName?: string;
}

function CustomCheckBox({
  text_left,
  label,
  checked,
  onChange,
  className,
  sclassName,
  labelClassName,
  value, //eslint-disable-line
  ...props
}: props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const inChandleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center gap-x-2",
        text_left ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <input
        {...props}
        checked={checked}
        aria-checked={checked}
        onChange={inChandleHandler}
        type="checkbox"
        className="sr-only"
        id={`${id}-checkbox`}
        ref={inputRef}
        onFocus={(_) => setIsFocused(true)}
        onBlur={(_) => setIsFocused(false)}
        data-testid="checkbox"
      />
      <label
        className={clsx(
          "inline-flex cursor-pointer items-center gap-x-2 text-sm font-bold leading-[1.375rem] text-base-20 outline",
          isFocused ? "outline-blue-20" : "outline-transparent",
          sclassName && "text-base capitalize leading-none",
          labelClassName
        )}
        htmlFor={`${id}-checkbox`}
        data-testid="checkbox-label"
      >
        <span
          className={clsx(
            "checkbox flex items-center justify-center border w-5 h-5 rounded bg-center p-0.5",
            checked
              ? "bg-themeBlue border-themeBlue bg-check bg-no-repeat"
              : "bg-white border-themeGray-10",
            sclassName
          )}
          data-testid="checkbox-check"
        >
          {/* <CheckIcon scale={1} color={checked ? "black" : "transparent"} /> */}
        </span>
        {label}
      </label>
    </div>
  );
}

export default CustomCheckBox;
