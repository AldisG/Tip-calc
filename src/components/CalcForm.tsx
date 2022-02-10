import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/redux/hooks';

import BillInput from './elements/BillInput';
import CustomPrecentage from './elements/CustomPrecentage';
import NumberOfPeople from './elements/NumberOfPeople';
import TipBtn from './elements/TipBtn';

import { updateBilAndTip } from '../store/slices/calcSlice';
import './CalcForm.scss';

const CalcForm = () => {
  const dispatch = useAppDispatch();
  const tipProcentages = [5, 10, 15, 25, 50];
  const resetAllInputs = useAppSelector(
    (state) => state.calcSlice.clearAllData
  );

  const calcBillAndProcent = (value: number): number => {
    const procentageResult = value * (tipAmount / 100);
    return Number(procentageResult.toFixed(2));
  };

  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [customTipAmount, setcustomTipAmount] = useState<number>(0);
  const [peopleCount, setPeopleCount] = useState(1);

  const handleInputChanges = (e: number) => {
    setcustomTipAmount(e);
    setTipAmount(e);
  };

  const handlePrecentChanges = (value: number) => {
    setTipAmount(value);
    setcustomTipAmount(0);
  };

  const convertDigitToStandart = Number(
    (calcBillAndProcent(bill) + bill).toFixed(2)
  );

  useEffect(() => {
    dispatch(
      updateBilAndTip({
        bill: convertDigitToStandart,
        tip: calcBillAndProcent(bill),
        peopleCount,
      })
    );
  }, [tipAmount, bill, peopleCount]);

  useEffect(() => {
    //reset %tips to not confuse jumping numbers in Bill
    setTipAmount(0);
    setcustomTipAmount(0);
  }, [bill]);

  useEffect(() => {
    setBill(0);
    setTipAmount(0);
    setcustomTipAmount(0);
    setPeopleCount(1);
  }, [resetAllInputs]);

  return (
    <div className="calc-form">
      <BillInput bill={bill} setBill={setBill} />
      <div className="tip-selection">
        <span data-testid="current-tip">
          Select Tip <b>{tipAmount || '0'}%</b>
        </span>

        <div className="tip-selection__buttons">
          {tipProcentages.map((num: number) => (
            <TipBtn num={num} key={num} setTipAmount={handlePrecentChanges} />
          ))}

          <CustomPrecentage
            customTipAmount={customTipAmount}
            handleInputChanges={handleInputChanges}
          />
        </div>
      </div>

      <NumberOfPeople
        peopleCount={peopleCount}
        setPeopleCount={setPeopleCount}
      />
    </div>
  );
};

export default CalcForm;
