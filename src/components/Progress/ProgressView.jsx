import styled from 'styled-components';
import InsertedMoney from './InsertedMoney';
import ReturnChangeButton from './ReturnChangeButton';
import ProgressLog from './ProgressLog';
import { wrapContainer } from '../../style';

const Wrapper = styled.div`
    ${wrapContainer}
`;

export default function ProgressView() {
    return (
        <Wrapper>
            <InsertedMoney />
            <ReturnChangeButton />
            <ProgressLog />
        </Wrapper>
    );
}
