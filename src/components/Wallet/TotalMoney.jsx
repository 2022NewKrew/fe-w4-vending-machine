import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #000;
    margin: 5px;
    border-radius: 5px;
    text-align: center;

    span {
        line-height: 40px;
    }
`;

export default function TotalMoney({ amount }) {
    return (
        <Wrapper>
            <span>{amount.toLocaleString()}원</span>
        </Wrapper>
    );
}
