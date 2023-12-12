/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProgressControl = ({ stage, setStage }) => {
  return (
    <>
      <div
        className="progress-control"
        style={{ borderTop: "1px solid #E6E6EB", paddingTop: "10px" }}
      >
        <button
          className="previousBtn"
          onClick={function (e) {
            e.preventDefault();
            if (stage > 1) {
              setStage(stage - 1);
            }
          }}
          style={{ background: stage === 1 ? "transparent" : "#F67599" }}
        >
          <object
            data="./src/assets/pictures/left-arrow.svg"
            type="image/svg+xml"
            className="arrow cursor-point"
          ></object>
          上一步
        </button>

        <button
          className="nextBtn"
          onClick={function (e) {
            e.preventDefault;
            if (stage < 3) {
              setStage(stage + 1);
            }
          }}
        >
          {stage === 3 ? "確認下單" : "下一步"}
          <object
            data="./src/assets/pictures/right-arrow.svg"
            type="image/svg+xml"
            className="arrow cursor-point"
          ></object>
        </button>
      </div>
    </>
  );
};

export default ProgressControl;
