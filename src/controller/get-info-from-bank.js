
import { currencies } from '../model/currencies';

const requestToBank = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getInfoFromBank = (bank, callBack) => {

  requestToBank(bank.url)
    .then(data => {
      callBack({
        bank: {...bank},
        rates: currencies.map(currency => {
            const rate = data.find(item => item.cc === currency.title)?.rate;
            return ({
              ...currency,
              rate: (currency.title === 'UAH' || !rate) ? 1 : rate,
            })
        })
      })
    })
};
