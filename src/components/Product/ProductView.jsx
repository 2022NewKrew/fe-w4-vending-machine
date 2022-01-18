import styled from 'styled-components';
import Product from './Product';
import { wrapContainer } from '../../style';

const items = [
    { id: 0, name: '사이다', price: 1000 },
    { id: 1, name: '파인애플 맛 환타', price: 400 },
    { id: 2, name: '포도맛 환타', price: 300 },
    { id: 3, name: '레몬에이드', price: 900 },
    { id: 4, name: '봉봉', price: 1200 },
];

const Wrapper = styled.ul`
    ${wrapContainer}

    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export default function ProductView() {
    const productList = items.map(({ id, name, price }) => (
        <Product key={id} name={name} price={price} />
    ));

    return <Wrapper>{productList}</Wrapper>;
}
