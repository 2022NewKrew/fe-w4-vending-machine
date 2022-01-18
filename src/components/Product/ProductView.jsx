import styled from 'styled-components';
import Product from './Product';
import { wrapContainer } from '../../style';
import { useStore } from '../../context/Store';

const Wrapper = styled.ul`
    ${wrapContainer}

    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export default function ProductView() {
    const { productList } = useStore();

    const products = productList.map(({ id, name, price, stock }) => (
        <Product key={id} id={id} name={name} price={price} stock={stock} />
    ));

    return <Wrapper>{products}</Wrapper>;
}
