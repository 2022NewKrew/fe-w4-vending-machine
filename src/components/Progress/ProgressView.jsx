import styled from 'styled-components';
import InsertedMoney from './InsertedMoney';
import ReturnChangeButton from './ReturnChangeButton';
import ProgressLog from './ProgressLog';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    border: 1px solid #000;
    padding: 20px;
    float: left;
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
