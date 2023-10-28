import clsx from "clsx";

type Props = {
  logo: any;
  title: string;
  rate: string;
  isSelected: boolean;
};

function CustomBundleCard({ isSelected, logo, rate, title }: Props) {
  return (
    <div
      className={clsx(
        "p-4 pb-5 border rounded-lg flex items-center gap-x-3.5 lg:flex-col gap-y-11",
        isSelected
          ? "border-themeBlue bg-themeGray-40"
          : "border-themeGray-20 bg-white"
      )}
    >
      <img src={logo} alt={`${title}`} className="w-10 h-10" />
      <div className="flex flex-col gap-y-1.5">
        <h4 className="text-base font-medium text-themeNavyBlue leading-none">{title}</h4>
        <p className="text-sm font-normal text-themeGray-10 leading-none">{rate}</p>
      </div>
    </div>
  );
}

export default CustomBundleCard;
