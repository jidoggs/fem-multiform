import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import PickAddOns from "./PickAddOns";
import FinishingUp from "./FinishingUp";
import Completed from "./Completed";
import clsx from "clsx";

type Props = {
  current: number;
};

function Form({ current }: Props) {
  let template: null | JSX.Element = null;

  switch (current) {
    case 1:
      template = <PersonalInfo />;
      break;
    case 2:
      template = <SelectPlan />;
      break;
    case 3:
      template = <PickAddOns />;
      break;
    case 4:
      template = <FinishingUp />;
      break;

    default:
      template = <Completed />;
      break;
  }
  return (
    <div
      className={clsx(
        "absolute -top-[4.5rem] left-4 right-4 bg-white py-8 rounded-lg",
        current > 4 ? "px-[18px]" : "px-6"
      )}
    >
      {template}
    </div>
  );
}

export default Form;
