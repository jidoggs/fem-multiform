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
    <main className="bg-themeCyan lg:pt-[6.5rem] h-screen">
      <section className="lg:p-4 rounded-lg bg-white mx-auto  flex flex-col lg:flex-row gap-x-[100px] h-full">
        <CustomNav current={data.step} />
        <form
          className="flex flex-col justify-between flex-1 bg-[#F0F6FF] relative"
          onSubmit={nextStepHandler}
        >
          <div className="flex-1  ">
            <Form current={data.step} />
          </div>
          {data.step <= 4 ? (
            <div
              className={clsx(
                "flex items-center p-4 pt-[18px] bg-white",
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

              <CustomButton type="submit">Next Step</CustomButton>
            </div>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export default App;
