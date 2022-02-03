import { FC, useRef, useEffect } from 'react';
import { BillInputProps } from '../../store/types';

const BillInput: FC<BillInputProps> = ({ bill, setBill }) => {
  const billRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (billRef.current) {
      billRef.current.focus();
    }
  }, []);

  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <div>
        <input
          ref={billRef}
          className="bill-input__field"
          data-testid="bill-input"
          type="number"
          id="bill"
          placeholder="0"
          value={bill}
          max="999999999"
          maxLength={9}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const newBill = Number(target.value);
            if (newBill < 0) {
              setBill(0);
              return;
            }
            if (newBill > 999999999) {
              setBill(bill);
              return;
            }
            setBill(newBill);
          }}
        />
      </div>
    </div>
  );
};

export default BillInput;
