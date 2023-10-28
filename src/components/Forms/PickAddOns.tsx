import CustomSectionTitle from "../CustomSectionTitle";
import AddOnCard from "../AddOnCard";

type Props = {};

function PickAddOns({}: Props) {
  return (
    <div className="flex flex-col gap-y-7">
      <CustomSectionTitle
        title="Pick add-ons"
        sub="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-y-3">
        <AddOnCard
          bundle="yr"
          isChecked
          price={10}
          sub="Access to multiplayer games"
          title="Online service"
        />
        <AddOnCard
          bundle="yr"
          isChecked
          price={10}
          sub="Access to multiplayer games"
          title="Online service"
        />
        <AddOnCard
          bundle="yr"
          isChecked={false}
          price={10}
          sub="Access to multiplayer games"
          title="Online service"
        />
      </div>
    </div>
  );
}

export default PickAddOns;
