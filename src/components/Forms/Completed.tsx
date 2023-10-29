import { useContext, useEffect } from "react";
import icon from "../../assets/icon-thank-you.svg";
import { DataContext } from "../../AppContext";
import { ContextData } from "../../types";

function Completed() {
  const { resetDataHandler } = useContext(DataContext) as ContextData;
  useEffect(() => {
    let timed = setTimeout(() => {
      resetDataHandler();
    }, 5000);

    return () => {
      clearTimeout(timed);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8 items-center py-12 md:justify-center md:h-full">
      <img src={icon} alt="completed" className="w-14 h-14 md:w-20 md:h-20" />
      <div className="flex flex-col gap-y-2.5 md:gap-y-4 items-center">
        <h1 className="font-bold text-2xl text-themeNavyBlue md:text-[2rem]">Thank you!</h1>
        <p className="text-center text-base font-medium text-themeGray-10">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
}

export default Completed;
