import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function CustomInput({ label, className, ...props }: Props) {
  return (
    <label className="inline-flex flex-col gap-y-1 lg:gap-y-2">
      <span className="inline-block text-sm text-themeNavyBlue font-medium">
        {label}
      </span>
      <input
        {...props}
        className={clsx(
          "py-3 px-4 lg:p-4 rounded-lg border border-themeGray-10 w-full placeholder:text-themeGray-10",
          className
        )}
      />
    </label>
  );
}

export default CustomInput;
