import { useState, useContext, createContext } from 'react';

const items = [
    { id: 0, num: 0, value: 10 },
    { id: 1, num: 1, value: 50 },
    { id: 2, num: 5, value: 100 },
    { id: 3, num: 5, value: 500 },
    { id: 4, num: 0, value: 1000 },
    { id: 5, num: 0, value: 5000 },
    { id: 6, num: 0, value: 10000 },
];

const StoreContext = createContext();

export function useStore() {
    return useContext(StoreContext);
}

export function StoreProvider({ children }) {
    const [insertedMoney, setInsertedMoney] = useState(0);
    const [moneyHave, setMoneyHave] = useState(items);
    const [log, setLog] = useState([]);

    return (
        <StoreContext.Provider
            value={{
                insertedMoney,
                setInsertedMoney,
                moneyHave,
                setMoneyHave,
                log,
                setLog,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
