import clsx from "clsx";
import React from "react";

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
          "px-6 py-4 rounded-lg font-medium text-base",
          !variant ? "bg-themeNavyBlue text-white" : "",
          variant === "done" ? "bg-themeBlue text-white" : "",
          variant === "return" ? "p-0 text-gray-10 rounded-none" : "",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}

export default CustomButton;
