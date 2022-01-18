import styled from 'styled-components';
import { useMoneyContext } from '../../context/MoneyProvider';

const Wrapper = styled.div`
    border: 1px solid #000;
    padding: 10px;
    text-align: right;
    padding-right: 30px;
`;

export default function InsertedMoney() {
    const { insertedMoney } = useMoneyContext();

    return (
        <Wrapper>
            <span>{insertedMoney.toLocaleString()}원</span>
        </Wrapper>
    );
}
