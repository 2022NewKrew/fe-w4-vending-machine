import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStore } from '../../context/Store';

const Wrapper = styled.div`
    overflow: auto;
    height: 300px;
    border: 1px solid #000;
`;

const Log = styled.li`
    list-style: none;
    font-size: 20px;
    line-height: 30px;
`;

export default function ProgressLog() {
    const { logList } = useStore();
    const logBoxRef = useRef();

    const logs = logList.map((log) => <Log>{log}</Log>);

    useEffect(() => {
        if (logBoxRef.current) {
            logBoxRef.current.scrollTop = logBoxRef.current.scrollHeight;
        }
    }, [logList]);

    return <Wrapper ref={logBoxRef}>{logs}</Wrapper>;
}
