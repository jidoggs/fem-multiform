import { useContext } from "react";
import clsx from "clsx";
import CustomNav from "./components/CustomNav";
import Form from "./components/Forms";
import CustomButton from "./components/CustomButton";
import { DataContext } from "./AppContext";
import { ContextData } from "./types";

function App() {
  const { nextStepHandler, prevStepHandler, data } = useContext(
    DataContext
  ) as ContextData;
  return (
    <main className="bg-themeCyan lg:flex lg:items-center lg:justify-center h-screen">
      <section className="lg:p-4 rounded-lg md:rounded-none lg:rounded-lg bg-white flex flex-col lg:gap-x-[100px] h-full w-full md:max-w-[58.75rem] md:flex-row lg:h-[37.5rem]">
        <CustomNav current={data.step} />
        <form
          autoComplete="off"
          className="flex flex-col justify-between flex-1 bg-[#F0F6FF] relative md:p-8 lg:pt-10 lg:pl-0 lg:pr-[5.25rem] lg:pb-4 md:bg-white"
          onSubmit={nextStepHandler}
        >
          <div className="flex-1  ">
            <Form current={data.step} />
          </div>
          {data.step <= 4 ? (
            <div
              className={clsx(
                "flex items-center p-4 pt-[18px] md:p-0 bg-white",
                data.step > 1 ? "justify-between" : "justify-end"
              )}
            >
              {data.step !== 1 ? (
                <CustomButton
                  variant="return"
                  onClick={prevStepHandler}
                  disabled={data.step === 1}
                  type="button"
                >
                  Go Back
                </CustomButton>
              ) : null}
              {data.step < 4 ? (
                <CustomButton type="submit">Next Step</CustomButton>
              ) : (
                <CustomButton variant="done" type="submit">Confirm</CustomButton>
              )}
            </div>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export default App;
