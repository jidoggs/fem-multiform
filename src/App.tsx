import { useState } from "react";
import CustomNav from "./components/CustomNav";
import Form from "./components/Forms";
import CustomButton from "./components/CustomButton";
import clsx from "clsx";

function App() {
  const [step, setStep] = useState(1);

  const prevStepHandler = () => setStep((prev) => prev - 1);
  const nextStepHandler = () => setStep((prev) => prev + 1);

  return (
    <main className="bg-themeCyan lg:pt-[6.5rem] h-screen">
      <section className="lg:p-4 rounded-lg bg-white mx-auto  flex flex-col lg:flex-row gap-x-[100px] h-full">
        <CustomNav current={step} />
        <div className="flex flex-col justify-between flex-1 bg-[#F0F6FF] relative">
          <div className="flex-1  ">
            <Form current={step} />
          </div>
          {step <= 4 ? (
            <div
              className={clsx(
                "flex items-center p-4 pt-[18px] bg-white",
                step > 1 ? "justify-between" : "justify-end"
              )}
            >
              {step !== 1 ? (
                <CustomButton
                  variant="return"
                  onClick={prevStepHandler}
                  disabled={step === 1}
                >
                  Go Back
                </CustomButton>
              ) : null}

              <CustomButton onClick={nextStepHandler}>Next Step</CustomButton>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default App;
