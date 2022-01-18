import styled from 'styled-components';
import { useStore } from '../../context/Store';

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

export default function MoneyUnit({ id, num, value }) {
    const { setInsertedMoney, setMoneyHave } = useStore();

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
