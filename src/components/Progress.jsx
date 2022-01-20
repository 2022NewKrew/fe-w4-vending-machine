import './Progress.css';
import { decimalSeperator } from '../utils/helper';
export default function Progress({ moneyInput, onClickReturn, progressLogList }) {
  const logList = progressLogList.map((log, idx) =>
    <li key={idx}>
      {log}
    </li>
  )

  return (
    <div className="progress__wrap">
      <div className="progress__money">
        {decimalSeperator(moneyInput)}원
      </div>
      <div className="progress__return" onClick={() => onClickReturn()}>
        반환
      </div>
      <ul className="progress__list">
        {logList.length ? logList : '진행 상태가 표시됩니다'}
      </ul>
    </div>
  );
}