import styled from 'styled-components';
import { useContext } from 'react';
import MoneyContext from '../../context/MoneyContext';

const Wrapper = styled.div`
    border: 1px solid #000;
    padding: 10px;
    text-align: right;
    padding-right: 30px;
`;

export default function InsertedMoney() {
    const { insertedMoney } = useContext(MoneyContext);

    return (
        <Wrapper>
            <span>{insertedMoney.toLocaleString()}원</span>
        </Wrapper>
    );
}
