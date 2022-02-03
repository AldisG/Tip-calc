export const calcTipOrBillPerPerson = (num: number, people: number): string => {
  if (!people) {
    return String(num);
  }
  return (num / people).toFixed(2);
};

export default {};
