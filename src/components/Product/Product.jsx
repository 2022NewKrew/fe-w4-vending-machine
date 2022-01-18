import styled from 'styled-components';
import { useStore } from '../../context/Store';

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
    ${({ active }) =>
        active &&
        `
        border: 2px solid #f00;
    `}
`;

export default function Product({ name, price }) {
    const { insertedMoney, setInsertedMoney } = useStore();

    const selectable = insertedMoney >= price;

    const handleBuyProduct = () => {
        if (!selectable) {
            return;
        }

        setInsertedMoney((prevState) => prevState - price);
    };

    return (
        <Wrapper>
            <ProductButton active={selectable} onClick={handleBuyProduct}>
                {name}
            </ProductButton>
            <span>{price}</span>
        </Wrapper>
    );
}
