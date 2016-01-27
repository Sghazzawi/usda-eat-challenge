import numeral from 'numeral';

export class CurrencyFormatValueConverter {
  toView(value) {
    return numeral(value).format('($0,0)');// : numeral(0).format('($0,0)');
  }

  fromView(formatted) {
  	return numeral().unformat(formatted);
  }
}