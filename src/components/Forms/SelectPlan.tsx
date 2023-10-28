import CustomSectionTitle from "../CustomSectionTitle";
import CustomBundleCard from "../CustomBundleCard";
import BundleSelector from "../BundleSelector";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";

type Props = {};

function SelectPlan({}: Props) {
  return (
    <div className="flex flex-col gap-y-6 pb-0.5">
      <CustomSectionTitle
        title="Select your plan"
        sub="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col gap-y-3">
        <CustomBundleCard
          rate="$9/mo"
          logo={arcade}
          title="Arcade"
          isSelected
        />
        <CustomBundleCard
          rate="$9/mo"
          logo={arcade}
          title="Arcade"
          isSelected={false}
        />
        <CustomBundleCard
          rate="$9/mo"
          logo={arcade}
          title="Arcade"
          isSelected={false}
        />
      </div>
      <BundleSelector value="monthly" />
    </div>
  );
}

export default SelectPlan;
