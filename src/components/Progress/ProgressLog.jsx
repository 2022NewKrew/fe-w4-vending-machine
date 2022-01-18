import styled from 'styled-components';
import { useStore } from '../../context/Store';

const Wrapper = styled.div`
    overflow: auto;
    height: 100px;
    border: 1px solid #000;
`;

export default function ProgressLog() {
    const { logList } = useStore();

    const logs = logList.map((log) => <li>{log}</li>);

    return <Wrapper>{logs}</Wrapper>;
}
