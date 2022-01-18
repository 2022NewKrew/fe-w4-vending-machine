import './Progress.css';
export default function Progress({ moneyInput }) {

  const returnHandler = () => {

  };

  return (
    <div className="progress__wrap">
      <div className="progress__money">{moneyInput}원</div>
      <div
        className="progress__return"
        onClick={returnHandler}
      >반환</div>
      <div className="progress__list">
        대기 중입니다.
      </div>
    </div>
  );
}