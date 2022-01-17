import { useState } from 'react';
import styled from 'styled-components';
import MoneyUnit from './MoneyUnit';
import TotalMoney from './TotalMoney';

const items = [
    { num: 0, value: 10 },
    { num: 1, value: 50 },
    { num: 5, value: 100 },
    { num: 5, value: 500 },
    { num: 0, value: 1000 },
    { num: 0, value: 5000 },
    { num: 0, value: 10000 },
];

const Wrapper = styled.ul`
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    border: 1px solid #000;
    padding: 20px;
    float: left;
`;

export default function WalletView() {
    const [moneyHave, setMoneyHave] = useState(items);

    const unitList = moneyHave.map(({ num, value }, idx) => (
        <MoneyUnit
            num={num}
            value={value}
            idx={idx}
            setMoneyHave={setMoneyHave}
        />
    ));

    return (
        <Wrapper>
            {unitList}
            <TotalMoney />
        </Wrapper>
    );
}
