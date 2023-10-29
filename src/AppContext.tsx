import React, { createContext, useState } from "react";
import {
  ContextData,
  Extras,
  IinData,
  iBundleHandler,
  iHandleChange,
  iHandleSubmit,
  iSelectPlanChange,
} from "./types";
import { initialstate } from "./helpers";

export const DataContext = createContext<null | ContextData>(null);

type Props = {
  children: React.ReactNode;
};

function AppContext({ children }: Props) {
  const [inData, setInData] = useState<IinData>(initialstate);
  const prevStepHandler = () => {
    setInData((prev) => ({ ...prev, step: prev.step - 1 }));
  };
  const nextStepHandler:iHandleSubmit = (e) => {
    e.preventDefault();
    console.log(e,"event")
    setInData((prev) => ({ ...prev, step: prev.step + 1 }));
  };
  const changePlanHandler = () => {
    setInData((prev) => ({ ...prev, step: 2 }));
  };

  const selectPlanHandler: iSelectPlanChange = (i) => {
    setInData((prev) => ({ ...prev, plan: { ...prev.plan, type: i } }));
  };
  const bundleHandler: iBundleHandler = (i) => {
    setInData((prev) => ({ ...prev, plan: { ...prev.plan, bundle: i } }));
  };

  const changeHandler: iHandleChange = (e) => {
    const { name, value } = e.target;
    setInData((prev) => ({
      ...prev,
      personalData: { ...prev.personalData, [name]: value },
    }));
  };

  const resetDataHandler = () => {
    setInData({ ...initialstate });
  };

  const addOnChangeHandler: iHandleChange = (e) => {
    const name = e.target.name as Extras;
    setInData((prev) => ({
      ...prev,
      addons: { ...prev.addons, [name]: !prev.addons[name] },
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data: inData,
        selectPlanHandler,
        bundleHandler,
        changeHandler,
        addOnChangeHandler,
        prevStepHandler,
        nextStepHandler,
        changePlanHandler,
        resetDataHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default AppContext;
