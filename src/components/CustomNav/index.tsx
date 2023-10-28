import clsx from "clsx";

type Props = {
  current: number;
};

const steps = [
  {
    position: 1,
    name: "YOUR INFO",
  },
  {
    position: 2,
    name: "SELECT PLAN",
  },
  {
    position: 3,
    name: "ADD-ONS",
  },
  {
    position: 4,
    name: "SUMMARY",
  },
];

function CustomNav({ current }: Props) {
  return (
    <ul className="lg:w-[17.125rem] w-full lg:h-[568px] lg:pt-10 lg:px-8 pt-8 pb-[6.75rem] bg-navMobile bg-no-repeat bg-cover lg:bg-navDesktop flex items-center justify-center gap-x-4 lg:flex-col gap-y-8 ">
      {steps.map(({ name, position }) => (
        <li key={position}>
          <div className="flex gap-x-4 text-white items-center">
            <div
              className={clsx(
                "w-8 h-8 rounded-full bg-transparent border flex items-center justify-center border-white py-2 px-3 font-bold",
                current === position || (current === 5 && position === 4)
                  ? "text-themeNavyBlue bg-white/40 border-transparent"
                  : ""
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
