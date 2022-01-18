import styled from 'styled-components';
import { useMoneyContext } from '../../context/MoneyProvider';

const ReturnButton = styled.button`
    width: 100%;
    margin: 20px 0;
    border: 1px solid #000;
    padding: 10px 0;
`;

export default function ReturnChangeButton() {
    const { insertedMoney, setInsertedMoney, setMoneyHave } = useMoneyContext();

    const handleReturnMoney = () => {
        if (insertedMoney === 0) {
            return;
        }

        setInsertedMoney(0);
        setMoneyHave((prevState) => {
            const newState = JSON.parse(JSON.stringify(prevState));
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
    };

    return <ReturnButton onClick={handleReturnMoney}>반환</ReturnButton>;
}
