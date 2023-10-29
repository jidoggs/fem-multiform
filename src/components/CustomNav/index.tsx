import clsx from "clsx";
import { steps } from "../../helpers";

type Props = {
  current: number;
};

function CustomNav({ current }: Props) {
  return (
    <ul className="lg:w-[17.125rem] w-full md:w-32 md:h-full lg:h-[568px] lg:pt-10 lg:px-8 pt-8 pb-[6.75rem] bg-navMobile bg-no-repeat bg-cover md:bg-navDesktop flex items-center justify-center gap-x-4 md:flex-col gap-y-8 lg:justify-start lg:items-start">
      {steps.map(({ name, position }) => (
        <li key={position}>
          <div className="flex gap-x-4 text-white items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full border flex items-center justify-center py-2 px-3 font-bold",
                current === position || (current === 5 && position === 4)
                  ? "text-themeNavyBlue bg-themePurple border-themePurple"
                  : "bg-transparent border-white"
              )}
            >
              {position}
            </div>
            <div className="hidden lg:flex flex-col gap-y-0.5">
              <p className="text-sm font-normal uppercase">Step {position}</p>
              <h5 className="text-base font-bold">{name}</h5>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CustomNav;
