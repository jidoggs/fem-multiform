import CustomSectionTitle from "../CustomSectionTitle";
import CustomInput from "../CustomInput";

type Props = {};

function PersonalInfo({}: Props) {
  return (
    <div className="flex flex-col gap-y-6">
      <CustomSectionTitle
        title="Personal info"
        sub="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col gap-y-4">
        <CustomInput name="name" placeholder="e.g. Stephen King" label="Name" />
        <CustomInput
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
        />
        <CustomInput
          name="phone"
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
