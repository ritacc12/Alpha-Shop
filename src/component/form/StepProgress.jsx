import "../../Styles/Form.scss";
export default function StepProgress({ stage }) {
  <>
    <div className="StepProgress">
      <h3>結帳</h3>
      <div className="stepper-container">
        <div className="Step">
          <div className="stepIcon">
            {stage > 1 ? (
              <div>
                <object data="./src/assets/pictures/pg-complete.svg"></object>
              </div>
            ) : (
              <div className="stepIcon circle-container">1</div>
            )}
          </div>
          <label
            className="label"
            style={{ color: stage === 1 ? "black" : "gray" }}
          >
            寄送地址
          </label>
          <span className="connect-line"></span>
        </div>

        <div className="Step">
          <div className="stepIcon">
            {stage > 2 ? (
              <div>
                <object data="./src/assets/pictures/pg-complete.svg"></object>
              </div>
            ) : (
              <div className="stepIcon circle-container">2</div>
            )}
          </div>
          <span className="connect-line"></span>
          <label
            className="label"
            style={{ color: stage === 2 ? "black" : "gray" }}
          >
            運送方式
          </label>
        </div>
        <div className="Step">
          <div className="stepIcon">
            {stage > 3 ? (
              <div>
                <img src="pg-complete.svg"></img>
              </div>
            ) : (
              <div className="stepIcon circle-container">3</div>
            )}
          </div>
          <label
            className="label"
            style={{ color: stage === 3 ? "black" : "gray" }}
          >
            付款資訊
          </label>
        </div>
      </div>
    </div>
  </>;
}
