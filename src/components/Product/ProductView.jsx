import Product from './Product';
import styled from 'styled-components';
import { wrapContainer } from '../../style';

const items = [
    { name: '사이다', price: 1000 },
    { name: '파인애플 맛 환타', price: 400 },
    { name: '포도맛 환타', price: 300 },
    { name: '레몬에이드', price: 900 },
    { name: '봉봉', price: 1200 },
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
    const productList = items.map(({ name, price }) => (
        <Product name={name} price={price} />
    ));

    return <Wrapper>{productList}</Wrapper>;
}
