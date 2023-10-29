import CustomSectionTitle from "../CustomSectionTitle";
import CustomBundleCard from "../CustomBundleCard";
import BundleSelector from "../BundleSelector";
import { plansInfo } from "../../helpers";

const { cards, pageInfo } = plansInfo;

function SelectPlan() {
  return (
    <div className="flex flex-col gap-y-6 pb-0.5 md:gap-y-8">
      <CustomSectionTitle title={pageInfo.title} sub={pageInfo.sub} />
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2.5 md:pt-2.5">
        {cards.map(({ logo, title }) => (
          <CustomBundleCard key={title} logo={logo} title={title} />
        ))}
      </div>
      <BundleSelector />
    </div>
  );
}

export default SelectPlan;
