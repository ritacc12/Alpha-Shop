export default function Step3() {
  return (
    <>
      <div className="step-content">
        <form>
          <h3 className="form-title">付款資訊</h3>
          <section className="form-body col col-12">
            <div className="input-group">
              <div className="input-label">持卡人姓名</div>
              <input className="name" type="text" placeholder="John Doe" />
            </div>
            <div className="input-group">
              <div className="input-label">卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
            <div className="input-group">
              <div className="input-label">有效期限</div>
              <input type="date" />
            </div>
            <div className="input-group">
              <div className="input-label">CVC/CCV</div>
              <input type="number" placeholder="123" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
