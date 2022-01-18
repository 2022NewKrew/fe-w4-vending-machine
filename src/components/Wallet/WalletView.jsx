import styled from 'styled-components';
import MoneyUnit from './MoneyUnit';
import TotalMoney from './TotalMoney';
import { wrapContainer } from '../../style';
import { useMoneyContext } from '../../context/MoneyProvider';

const Wrapper = styled.ul`
    ${wrapContainer}
    border-right: 1px solid #000;
`;

export default function WalletView() {
    const { moneyHave } = useMoneyContext();

    const unitList = moneyHave.map(({ id, num, value }) => (
        <MoneyUnit key={id} id={id} num={num} value={value} />
    ));

    const totalAmount = moneyHave.reduce(
        (prev, { num, value }) => prev + num * value,
        0
    );

    return (
        <Wrapper>
            {unitList}
            <TotalMoney amount={totalAmount} />
        </Wrapper>
    );
}
