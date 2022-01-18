import styled from 'styled-components';
import { useStore } from '../../context/Store';

const Wrapper = styled.div`
    border: 1px solid #000;
    padding: 10px;
    text-align: right;
    padding-right: 30px;
`;

export default function InsertedMoney() {
    const { insertedMoney } = useStore();

    return (
        <Wrapper>
            <span>{insertedMoney.toLocaleString()}원</span>
        </Wrapper>
    );
}
