export type CalculatiNumbersons = {
  bill: number;
  tip: number;
  peopleCount: number;
};

export type CustomPrecentageProps = {
  customTipAmount: number;
  handleInputChanges: (num: number) => void;
};

export type BillInputProps = {
  bill: number;
  setBill: (num: number) => void;
};

export type NumberOfPeopleProps = {
  peopleCount: number;
  setPeopleCount: (num: number) => void;
};

export type TipBtnProps = {
  num: number;
  setTipAmount: (number: number) => void;
};

export default { }