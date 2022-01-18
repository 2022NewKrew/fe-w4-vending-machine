import styled from 'styled-components';
import ProductView from './components/Product/ProductView';
import ProgressView from './components/Progress/ProgressView';
import WalletView from './components/Wallet/WalletView';
import { GlobalStyle } from './style';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 1200px;
    padding: 50px 0;

    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ProductView />
                <ProgressView />
                <WalletView />
            </Wrapper>
        </>
    );
}
