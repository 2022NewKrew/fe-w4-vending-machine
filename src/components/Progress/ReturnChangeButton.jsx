import styled from 'styled-components';
import { useStore } from '../../context/Store';
import { deepcopy } from '../../utils';

const ReturnButton = styled.button`
    width: 100%;
    margin: 20px 0;
    border: 1px solid #000;
    padding: 10px 0;
`;

export default function ReturnChangeButton() {
    const { insertedMoney, setInsertedMoney, setMoneyHave, setLogList } =
        useStore();

    const handleReturnMoney = () => {
        if (insertedMoney === 0) {
            return;
        }

        setInsertedMoney(0);
        setMoneyHave((prevState) => {
            const newState = deepcopy(prevState);
            let leftMoney = insertedMoney;
            return newState
                .reverse()
                .map((unit) => {
                    const num = unit.num + parseInt(leftMoney / unit.value);
                    leftMoney %= unit.value;
                    return {
                        ...unit,
                        num,
                    };
                })
                .reverse();
        });
        setLogList((prevState) => [
            ...prevState,
            `잔돈 ${insertedMoney.toLocaleString()}원 반환`,
        ]);
    };

    return <ReturnButton onClick={handleReturnMoney}>반환</ReturnButton>;
}
