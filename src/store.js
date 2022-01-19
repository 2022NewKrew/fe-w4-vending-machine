import { createContext, useState } from "react";
import data from "./data/data.json";
import { cloneDeep } from "lodash-es";

export const INSERT_COIN = "INSERT_COIN";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const RETURN_CHANGE = "RETURN_CHANGE";

export const ContextStore = createContext();

let timer = 0;

const AppContext = (props) => {
  const [progressInfo, setProgressInfo] = useState({
    inputMoney: 0,
    actionLog: [],
    currentMoney: data["current"],
  });
  const [insertMode, setInsertMode] = useState(false);

  const dispatch = ({ actionType, payload = {} }) => {
    const { inputMoney, currentMoney } = progressInfo;

    switch (actionType) {
      case INSERT_COIN: {
        const { selectUnit, index } = payload;

        const newCurrent = cloneDeep(currentMoney);
        newCurrent[index].count -= 1;

        setProgressInfo(({ inputMoney, actionLog }) => ({
          inputMoney: inputMoney + selectUnit,
          actionLog: [...actionLog, `${selectUnit}원 투입`],
          currentMoney: newCurrent,
        }));
        setInsertMode(true);
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          dispatch({
            actionType: RETURN_CHANGE,
          });
          setInsertMode(false);
        }, 5000);

        break;
      }
      case SELECT_PRODUCT: {
        clearTimeout(timer);

        const { name, price } = payload;

        setProgressInfo((prev) => ({
          ...prev,
          inputMoney: prev.inputMoney - price,
          actionLog: [...prev.actionLog, `${name} 선택`],
        }));
        setInsertMode(false);
        break;
      }
      case RETURN_CHANGE: {
        clearTimeout(timer);

        const { price } = payload;

        let totalMoney = inputMoney - (price || 0);

        const newCurrentMoney = currentMoney
          .reverse()
          .map(({ unit, count }) => {
            const addCount = parseInt(totalMoney / unit);
            const rest = parseInt(totalMoney % unit);
            totalMoney = rest;

            return {
              unit,
              count: count + addCount,
            };
          })
          .reverse();

        setProgressInfo((prev) => ({
          inputMoney: 0,
          actionLog: [...prev.actionLog, "잔돈 반환"],
          currentMoney: newCurrentMoney,
        }));
        break;
      }
      default:
        break;
    }
  };
  return (
    <ContextStore.Provider value={{ progressInfo, dispatch, insertMode }}>
      {props.children}
    </ContextStore.Provider>
  );
};

export default AppContext;
