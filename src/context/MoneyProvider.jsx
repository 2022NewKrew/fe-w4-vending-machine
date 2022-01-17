import { useState } from 'react';
import MoneyContext from './MoneyContext';

export default function MoneyProvider({ children }) {
    const [insertedMoney, setInsertedMoney] = useState(0);

    return (
        <MoneyContext.Provider value={{ insertedMoney, setInsertedMoney }}>
            {children}
        </MoneyContext.Provider>
    );
}
