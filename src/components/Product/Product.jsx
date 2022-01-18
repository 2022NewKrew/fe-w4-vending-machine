import styled from 'styled-components';
import { useStore } from '../../context/Store';
import { deepcopy } from '../../utils';

const Wrapper = styled.li`
    width: 69px;
    height: 70px;
    text-align: center;
    float: left;
    margin: 10px;

    ${({ outOfStock }) => outOfStock && `color: #808080;`}
`;

const ProductButton = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
    border: 1px solid #000;

    ${({ selectable }) =>
        selectable &&
        `
        border: 2px solid #f00;
    `}
    ${({ outOfStock }) =>
        outOfStock &&
        `
        color: #808080;
        border-color: #808080;
    `}
`;

export default function Product({ id, name, price, stock }) {
    const { insertedMoney, setInsertedMoney, setLogList, setProductList } =
        useStore();

    const selectable = insertedMoney >= price && stock !== 0;
    const outOfStock = stock === 0;

    const handleBuyProduct = () => {
        if (!selectable) {
            return;
        }

        setInsertedMoney((prevState) => prevState - price);
        setLogList((prevState) => [...prevState, `${name} 이(가) 선택 됨`]);
        setProductList((prevState) => {
            const newState = deepcopy(prevState);
            newState[id].stock -= 1;
            return newState;
        });
    };

    return (
        <Wrapper outOfStock={outOfStock}>
            <ProductButton
                selectable={selectable}
                outOfStock={outOfStock}
                onClick={handleBuyProduct}
            >
                {name}
            </ProductButton>
            <span>{price}</span>
        </Wrapper>
    );
}
