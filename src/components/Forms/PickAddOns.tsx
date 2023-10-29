import CustomSectionTitle from "../CustomSectionTitle";
import AddOnCard from "../AddOnCard";
import { addOnsInfo } from "../../helpers";

const { cards, pageInfo } = addOnsInfo;

function PickAddOns() {
  return (
    <div className="flex flex-col gap-y-7 md:gap-y-10">
      <CustomSectionTitle title={pageInfo.title} sub={pageInfo.sub} />
      <div className="flex flex-col gap-y-3 md:gap-y-4">
        {cards.map((itm) => (
          <AddOnCard
            key={itm.type}
            sub={itm.sub}
            title={itm.title}
            type={itm.type}
          />
        ))}
      </div>
    </div>
  );
}

export default PickAddOns;
