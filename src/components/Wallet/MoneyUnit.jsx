import styled from 'styled-components';
import { useContext } from 'react';
import MoneyContext from '../../context/MoneyContext';

const Wrapper = styled.li`
    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

const Button = styled.button`
    width: 169px;
    height: 50px;
    border: 1px solid #000;
    margin: 5px;
    border-radius: 5px;
`;

export default function MoneyUnit({ num, value, idx, setMoneyHave }) {
    const { setInsertedMoney } = useContext(MoneyContext);

    const handleInsertedMoney = () => {
        if (num === 0) {
            return;
        }
        setInsertedMoney((prevState) => prevState + value);
        setMoneyHave((prevState) => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState[id].num -= 1;
            return newState;
        });
    };

    return (
        <Wrapper>
            <Button onClick={handleInsertedMoney}>{value}원</Button>
            <Button onClick={handleInsertedMoney}>{num}개</Button>
        </Wrapper>
    );
}
