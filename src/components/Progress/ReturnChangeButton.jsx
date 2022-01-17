import styled from 'styled-components';

const ReturnButton = styled.button`
    width: 100%;
    margin: 20px 0;
    border: 1px solid #000;
    padding: 10px 0;
`;

export default function ReturnChangeButton() {
    return <ReturnButton>반환</ReturnButton>;
}
