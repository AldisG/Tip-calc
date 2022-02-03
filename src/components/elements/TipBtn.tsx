import { FC } from 'react';
import { TipBtnProps } from '../../store/types';

const TipBtn: FC<TipBtnProps> = ({ num, setTipAmount }) => {
  return (
    <button
      data-testid="tip-amount-btn"
      className="tip-amount-btn"
      key={num}
      onClick={() => setTipAmount(num)}
    >
      {num}%
    </button>
  );
};

export default TipBtn;
