import React from "react";
import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "done" | "return";
  isloading?: boolean;
}

function CustomButton({
  variant,
  disabled,
  children,
  className,
  isloading,
  ...props
}: Props) {
  return (
    <>
      <button
        {...props}
        disabled={disabled || isloading}
        className={clsx(
          "font-medium text-sm md:text-base cursor-pointer leading-none md:leading-none",
          !variant ? "bg-themeNavyBlue hover:bg-[#174A8B]" : "",
          variant === "done" ? "bg-themeBlue" : "",
          variant === "return" ? "text-themeGray-10 hover:text-themeNavyBlue" : "px-4 py-3 md:px-6 md:py-4 rounded md:rounded-lg text-white",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}

export default CustomButton;
