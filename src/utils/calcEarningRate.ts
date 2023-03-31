import addComma from './addComma';

const calcEarningRate = (payment: string, asset: string) => {
  const profit = addComma((+asset - +payment).toString());
  const earningRate = (((+asset - +payment) / +payment) * 100).toFixed(2) + '%';

  return { profit, earningRate };
};

export default calcEarningRate;
