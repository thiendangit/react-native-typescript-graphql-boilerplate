import * as accounting from 'accounting';

export const formatMoney = function (money: string | number, symbol = '$') {
  if (parseInt(<string>money) !== parseFloat(<string>money)) {
    return accounting.formatMoney(money, {
      symbol,
      thousand: '.',
      format: '%v %s',
      precision: 0,
    });
  } else {
    return accounting.formatMoney(money, {
      symbol,
      thousand: '.',
      format: '%v %s',
      precision: 0,
    });
  }
};
