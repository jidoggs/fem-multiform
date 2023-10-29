import { useContext } from "react";
import { DataContext } from "../../AppContext";
import CustomSectionTitle from "../CustomSectionTitle";
import CustomInput from "../CustomInput";
import { ContextData } from "../../types";

function PersonalInfo() {
  const { data, changeHandler } = useContext(DataContext) as ContextData;
  const personalData = data.personalData;
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-10">
      <CustomSectionTitle
        title="Personal info"
        sub="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col gap-y-4 md:gap-y-6">
        <CustomInput
          name="name"
          placeholder="e.g. Stephen King"
          label="Name"
          value={personalData.name}
          onChange={changeHandler}
          required
        />
        <CustomInput
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          type="email"
          value={personalData.email}
          onChange={changeHandler}
          required
        />
        <CustomInput
          name="phone"
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          type="number"
          value={personalData.phone}
          onChange={changeHandler}
          minLength={10}
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
