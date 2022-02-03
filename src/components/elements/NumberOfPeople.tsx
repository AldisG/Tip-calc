import { FC } from 'react';
import { NumberOfPeopleProps } from '../../store/types';

const NumberOfPeople: FC<NumberOfPeopleProps> = ({
  peopleCount,
  setPeopleCount,
}) => {
  return (
    <div className="number-of-people">
      <label htmlFor="people-label" className="people-label">
        Number of People
      </label>
      <div>
        <input
          data-testid="bill-input__field"
          className="bill-input__field"
          type="number"
          min="1"
          id="people-label"
          placeholder="1"
          value={peopleCount}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const value = Number(target.value);
            if (value < 1) {
              setPeopleCount(1);
              return;
            }
            setPeopleCount(Number(target.value));
          }}
        />
      </div>
    </div>
  );
};

export default NumberOfPeople;
