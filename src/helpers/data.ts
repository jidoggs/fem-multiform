import { IaddOnsInfo, IinData, IplansInfo } from "../types";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

export const FULL_YEAR_DISCOUNT = 10;

export const amountData = {
  plan: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  addons: {
    onlineService: 1,
    largeStorage: 2,
    customizableProfile: 2,
  },
};

export const addOnsInfo: IaddOnsInfo = {
  pageInfo: {
    title: "Pick add-ons",
    sub: "Add-ons help enhance your gaming experience.",
  },
  cards: [
    {
      title: "Online service",
      sub: "Access to multiplayer games",
      type: "onlineService",
    },
    {
      title: "Larger storage",
      sub: "Extra 1TB of cloud save",
      type: "largeStorage",
    },
    {
      title: "Customizable profile",
      sub: "Custom theme on your profile",
      type: "customizableProfile",
    },
  ],
};

export const plansInfo: IplansInfo = {
  pageInfo: {
    title: "Select your plan",
    sub: "You have the option of monthly or yearly billing.",
  },
  cards: [
    {
      title: "arcade",
      logo: arcade,
    },
    {
      title: "advanced",
      logo: advanced,
    },
    {
      title: "pro",
      logo: pro,
    },
  ],
};

export const initialstate: IinData = {
  step: 1,
  personalData: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    type: "arcade",
    bundle: "monthly",
  },
  addons: {
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
  },
};
