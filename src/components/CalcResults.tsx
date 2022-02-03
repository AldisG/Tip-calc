import { useAppDispatch, useAppSelector } from '../store/redux/hooks';
import { clearAllFields, resetAllFields } from '../store/slices/calcSlice';
import { calcTipOrBillPerPerson } from '../unitl/sharedFunc';
import './CalcResults.scss';

const CalcResults = () => {
  const { bill, tip, peopleCount } = useAppSelector(
    (store) => store.calcSlice.calcData
  );

  const dispatch = useAppDispatch();
  const resetInputs = () => {
    dispatch(clearAllFields());
    dispatch(resetAllFields());
  };

  return (
    <div className="calc-result">
      <div className="tip-amount-wrapper">
        <div className="tip__labels">
          <h4 className="tip__header">Tip Amount</h4>
          <span className="tip__span">Per person</span>
        </div>
        <div className="tip__sum">
          ${calcTipOrBillPerPerson(tip, peopleCount)}
        </div>
      </div>
      <div className="tip-amount-wrapper">
        <div className="tip__labels">
          <h4 className="tip__header">Bill</h4>
          <span className="tip__span">Per person</span>
        </div>
        <div className="tip__sum">
          ${calcTipOrBillPerPerson(bill, peopleCount)}
        </div>
      </div>
      <button className="tip-reset-btn flex-c-c" onClick={resetInputs}>
        RESET
      </button>
    </div>
  );
};

export default CalcResults;
