import { useState, useContext, createContext } from 'react';

const initialCoins = [
    { id: 0, num: 0, value: 10 },
    { id: 1, num: 1, value: 50 },
    { id: 2, num: 5, value: 100 },
    { id: 3, num: 5, value: 500 },
    { id: 4, num: 0, value: 1000 },
    { id: 5, num: 0, value: 5000 },
    { id: 6, num: 0, value: 10000 },
];

const initialProducts = [
    { id: 0, name: '사이다', price: 1000, stock: 5 },
    { id: 1, name: '파인애플 맛 환타', price: 400, stock: 3 },
    { id: 2, name: '포도맛 환타', price: 300, stock: 4 },
    { id: 3, name: '레몬에이드', price: 900, stock: 6 },
    { id: 4, name: '봉봉', price: 1200, stock: 0 },
];

const StoreContext = createContext();

export function useStore() {
    return useContext(StoreContext);
}

export function StoreProvider({ children }) {
    const [insertedMoney, setInsertedMoney] = useState(0);
    const [moneyHave, setMoneyHave] = useState(initialCoins);
    const [logList, setLogList] = useState([]);
    const [productList, setProductList] = useState(initialProducts);

    return (
        <StoreContext.Provider
            value={{
                insertedMoney,
                setInsertedMoney,
                moneyHave,
                setMoneyHave,
                logList,
                setLogList,
                productList,
                setProductList,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
