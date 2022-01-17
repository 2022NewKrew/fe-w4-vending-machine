import styled from 'styled-components';

const Wrapper = styled.li`
    width: 69px;
    height: 70px;
    text-align: center;
    float: left;
    margin: 10px;
`;

const ProductButton = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
    border: 1px solid #000;
`;

export default function Product({ name, price }) {
    return (
        <Wrapper>
            <ProductButton>{name}</ProductButton>
            <span>{price}</span>
        </Wrapper>
    );
}
