import styled from 'styled-components';
import { useStore } from '../../context/Store';
import { deepcopy } from '../../utils';

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
    const { setInsertedMoney, setMoneyHave, setLogList } = useStore();

    const handleInsertedMoney = () => {
        if (num === 0) {
            return;
        }
        setInsertedMoney((prevState) => prevState + value);
        setMoneyHave((prevState) => {
            const newState = deepcopy(prevState);
            newState[id].num -= 1;
            return newState;
        });
        setLogList((prevState) => [
            ...prevState,
            `${value.toLocaleString()}원이 투입됐음.`,
        ]);
    };

    return (
        <Wrapper>
            <Button onClick={handleInsertedMoney}>{value}원</Button>
            <Button onClick={handleInsertedMoney}>{num}개</Button>
        </Wrapper>
    );
}
