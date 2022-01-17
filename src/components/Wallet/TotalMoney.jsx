import styled from 'styled-components';

const totalPrice = 23500;

const Wrapper = styled.div`
    border: 1px solid #000;
    margin: 5px;
    border-radius: 5px;
    text-align: center;

    span {
        line-height: 40px;
    }
`;

export default function TotalMoney() {
    return (
        <Wrapper>
            <span>{totalPrice.toLocaleString()}원</span>
        </Wrapper>
    );
}
