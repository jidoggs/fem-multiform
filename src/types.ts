export type Bundle = "monthly" | "yearly";
export type Plan = "arcade" | "advanced" | "pro";
export type Extras = "onlineService" | "largeStorage" | "customizableProfile";

export type IinData = {
  step: number;
  personalData: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    type: Plan;
    bundle: Bundle;
  };
  addons: {
    onlineService: boolean;
    largeStorage: boolean;
    customizableProfile: boolean;
  };
};

type PageInfo<T> = {
  pageInfo: {
    title: string;
    sub: string;
  };
  cards: T;
};

export type IaddOnsInfo = PageInfo<
  {
    title: string;
    sub: string;
    type: Extras;
  }[]
>;
export type IplansInfo = PageInfo<
  {
    title: Plan;
    logo: string;
  }[]
>;

export type iHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type iHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type iSelectPlanChange = (i: Plan) => void;
export type iBundleHandler = (i: Bundle) => void;

export type ContextData = {
  data: IinData;
  selectPlanHandler: iSelectPlanChange;
  bundleHandler: iBundleHandler;
  changeHandler: iHandleChange;
  addOnChangeHandler: iHandleChange;
  prevStepHandler: VoidFunction;
  nextStepHandler: iHandleSubmit;
  changePlanHandler: VoidFunction;
  resetDataHandler: VoidFunction;
};
