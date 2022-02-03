import { FC } from 'react';
import { CustomPrecentageProps } from '../../store/types';

const CustomPrecentage: FC<CustomPrecentageProps> = ({
  customTipAmount,
  handleInputChanges,
}) => {
  return (
    <input
      data-testid="custom-tip-amount-input"
      className="tip-amount-btn tip-amount-input"
      type="number"
      min="0"
      max="100"
      placeholder="Custom"
      value={customTipAmount}
      onFocus={(e) => {
        e.target.select();
        handleInputChanges(0);
      }}
      onChange={(e) => {
        const target = e.target as HTMLInputElement;
        const newInput = Number(target.value);
        if (newInput > 99) {
          handleInputChanges(customTipAmount);
          return;
        }
        if (newInput < 0) {
          handleInputChanges(0);
          return;
        }
        handleInputChanges(newInput);
      }}
    />
  );
};

export default CustomPrecentage;
