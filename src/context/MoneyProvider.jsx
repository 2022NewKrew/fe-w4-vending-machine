import { useState, useContext, createContext } from 'react';

const MoneyContext = createContext();

export function useInputMoney() {
    return useContext(MoneyContext);
}

export function MoneyProvider({ children }) {
    const [insertedMoney, setInsertedMoney] = useState(0);

    return (
        <MoneyContext.Provider value={{ insertedMoney, setInsertedMoney }}>
            {children}
        </MoneyContext.Provider>
    );
}
