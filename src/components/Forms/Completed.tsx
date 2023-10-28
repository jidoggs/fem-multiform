import icon from "../../assets/icon-thank-you.svg";

type Props = {};

function Completed({}: Props) {
  return (
    <div className="flex flex-col gap-y-6 items-center py-12" >
      <img src={icon} alt="completed" className="w-14 h-14" />
      <div className="flex flex-col gap-y-2.5 items-center" >
        <h1 className="font-bold text-2xl text-themeNavyBlue" >Thank you!</h1>
        <p className="text-center text-base font-medium text-themeGray-10" >
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
}

export default Completed;
