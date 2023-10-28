import clsx from "clsx";
import CustomCheckBox from "../CustomCheckbox";

type Props = {
  title: string;
  sub: string;
  price: number;
  bundle: string;
  isChecked: boolean;
};

function AddOnCard({ bundle, price, sub, title, isChecked }: Props) {
  return (
    <div
      className={clsx(
        "flex pt-3.5 pb-2.5 px-4 border rounded-lg items-center gap-x-6",
        isChecked
          ? "border-themeBlue bg-themeGray-40"
          : "border-themeGray-10 bg-white"
      )}
    >
      <CustomCheckBox checked={isChecked} />
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col gap-y-1.5 font-medium" >
          <h4 className="text-themeNavyBlue text-sm leading-none lg:text-base" >{title}</h4>
          <p className="text-themeGray-10 text-xs leading-none lg:text-sm" >{sub}</p>
        </div>
        <p className="text-sm font-normal text-themeBlue" >
          +${price}/{bundle}
        </p>
      </div>
    </div>
  );
}

export default AddOnCard;
