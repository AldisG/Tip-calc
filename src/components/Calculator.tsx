import CalcForm from './CalcForm';
import CalcResults from './CalcResults';
import './Calculator.scss';

const Calculator = () => {
  return (
    <div className="calc-wrapper">
      <div className="calc-body">
        <div className="calc-element">
          <CalcForm />
        </div>
        <div className="calc-element">
          <CalcResults />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
