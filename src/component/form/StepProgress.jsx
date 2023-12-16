/* eslint-disable no-unused-vars */
import React from "react";
import "../../Styles/StepProgress.scss";
import Complete from "../../assets/pictures/circle-check-solid.svg";
import PropTypes from "prop-types";

const StepProgress = ({ stage }) => {
  return (
    <div className="StepProgress">
      <h3 className="Progress-title">結帳</h3>
      <div
        className="stepper-container"
        style={{ display: "flex", alignContent: "center" }}
      >
        <div className="Step" data-phase="address">
          <div className="stepIcon">
            {stage > 1 ? (
              <div className="step-group-sub-icon complete">
                <object
                  data="./src/assets/pictures/circle-check-solid.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            ) : (
              <div className="step-group-sub-icon circle-container">1</div>
            )}
          </div>
          <label
            className="progress-label"
            style={{
              color:
                stage === 1
                  ? "var(--progress-current-color)"
                  : "var(--progress-undone-color)",
            }}
          >
            寄送地址
          </label>
          <span className="connect-line"></span>
        </div>

        <div className="Step" data-phase="shipping">
          <div className="stepIcon">
            {stage > 2 ? (
              <div className="step-group-sub-icon">
                <object
                  data="./src/assets/pictures/circle-check-solid.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            ) : (
              <div className="step-group-sub-icon circle-container">2</div>
            )}
          </div>

          <label
            className="progress-label"
            style={{
              color:
                stage === 2
                  ? "var(--progress-current-color)"
                  : "var(--progress-undone-color)",
            }}
          >
            運送方式
          </label>
          <span className="connect-line"></span>
        </div>
        <div className="Step" data-phase="credit-card">
          <div className="stepIcon">
            {stage > 3 ? (
              <div className="step-group-sub-icon">
                <object
                  data="./src/assets/pictures/circle-check-solid.svg"
                  type="image/svg+xml"
                ></object>
              </div>
            ) : (
              <div className="step-group-sub-icon circle-container">3</div>
            )}
          </div>
          <label
            className="progress-label"
            style={{
              color:
                stage === 3
                  ? "var(--progress-current-color)"
                  : "var(--progress-undone-color)",
            }}
          >
            付款資訊
          </label>
        </div>
      </div>
    </div>
  );
};

StepProgress.propTypes = {
  stage: PropTypes.number.isRequired,
};

export default StepProgress;
