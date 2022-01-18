import { useState } from 'react';
import styled from 'styled-components';
import MoneyUnit from './MoneyUnit';
import TotalMoney from './TotalMoney';
import { wrapContainer } from '../../style';

const items = [
    { id: 0, num: 0, value: 10 },
    { id: 1, num: 1, value: 50 },
    { id: 2, num: 5, value: 100 },
    { id: 3, num: 5, value: 500 },
    { id: 4, num: 0, value: 1000 },
    { id: 5, num: 0, value: 5000 },
    { id: 6, num: 0, value: 10000 },
];

const Wrapper = styled.ul`
    ${wrapContainer}
    border-right: 1px solid #000;
`;

export default function WalletView() {
    const [moneyHave, setMoneyHave] = useState(items);

    const unitList = moneyHave.map(({ id, num, value }) => (
        <MoneyUnit
            key={id}
            id={id}
            num={num}
            value={value}
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
