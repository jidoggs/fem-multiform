import CustomSectionTitle from "../CustomSectionTitle";

type Props = {};

function FinishingUp({}: Props) {
  return (
    <div className="flex flex-col gap-y-6">
      <CustomSectionTitle
        title="Finishing up"
        sub="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col p-4 gap-y-4 text-sm font-medium bg-themeGray-40 rounded-lg">
        <div className="pb-3.5 flex items-center justify-between border-b border-themeGray-20">
          <div className="flex flex-col gap-y-0.5 text-themeNavyBlue items-start">
            <h4 className="text-themeNavyBlue">Arcade (Monthly)</h4>
            <button className="p-0 text-themeGray-10 underline">Change</button>
          </div>
          <p className="text-themeNavyBlue">$90/yr</p>
        </div>
        <div className="flex items-center justify-between text-sm font-medium">
          <h5 className="text-themeGray-10">Online service</h5>
          <p className="text-themeNavyBlue">+$10/yr</p>
        </div>
        <div className="flex items-center justify-between text-sm font-medium">
          <h5 className="text-themeGray-10">Online service</h5>
          <p className="text-themeNavyBlue">+$10/yr</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3.5">
        <h2 className="text-sm font-medium text-themeNavyBlue">
          Total (per year)
        </h2>
        <p className="text-base font-bold text-themeBlue">$120/yr</p>
      </div>
    </div>
  );
}

export default FinishingUp;
