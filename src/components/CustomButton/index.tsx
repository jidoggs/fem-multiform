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
          "font-medium text-sm lg:text-base",
          !variant ? "bg-themeNavyBlue" : "",
          variant === "done" ? "bg-themeBlue" : "",
          variant === "return" ? "text-themeGray-10" : "px-4 py-3 lg:px-6 lg:py-4 rounded lg:rounded-lg text-white",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}

export default CustomButton;
