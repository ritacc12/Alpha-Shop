/* eslint-disable no-unused-vars */
import React from "react";
import ProgressControl from "./ProgressControl";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState } from "react";
import "../../Styles/Form.scss";

function Form() {
  const [stage, setStage] = useState(1);

  const FormStage = () => {
    switch (stage) {
      case 1:
        return <Step1></Step1>;
      case 2:
        return <Step2></Step2>;
      case 3:
        return <Step3></Step3>;
    }
  };
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="form-left">
            <StepProgress stage={stage} />
            {FormStage()}
            <ProgressControl stage={stage} setStage={setStage} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
