export default function Step2() {
  return (
    <>
      <div className="step-content">
        <form data-phase="shipping" className="input-group">
          <h3 className="form-title">運送方式</h3>
          <div className="radio-info checked">
            <label className="choice-title">
              <input
                type="radio"
                name="shipping"
                value="standard"
                id="radio"
                defaultChecked
              ></input>
              標準運送
            </label>
            <div className="price">免費</div>
            <p className="period">約3~7個工作天</p>
          </div>
          <div className="radio-info" data-price={500}>
            <label className="choice-title">
              <input
                type="radio"
                name="shipping"
                value="special"
                id="radio"
              ></input>
              DHL貨運
            </label>
            <div className="price">$500</div>
            <p className="period">48小時內送達</p>
          </div>
        </form>
      </div>
    </>
  );
}
