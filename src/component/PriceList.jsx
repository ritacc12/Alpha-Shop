export default function PriceList() {
  return (
    <>
      <div className="cart-info shipping line">
        <div className="amount">運費</div>
        <div className="price">免費</div>
      </div>
      <div className="cart-info total line">
        <div className="amount">小計</div>
        <div className="price total">{this.props.totalNum}</div>
      </div>
    </>
  );
}
