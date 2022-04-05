const currencyApiKey = 'cZ1Coj9HQ9P9tlTcWH1I9GzfFLUIS9PEs1Jk';
const minfinApiKey = '988d7cf912d35fe402d73c8e0a5439dc79527e86';

export const banks = [
  {
    id: 1,
    title: 'National bank of Ukraine',
    shortTitle: 'NBU',
    url:'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  },
  {
    id: 2,
    title: 'PrivatBank',
    shortTitle: 'PB',
    url:'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4'
  },
  {
    id: 3,
    title: 'EuroBank',
    shortTitle: 'EB',
    url: 'https://currencyapi.net/api/v1/rates?key=cZ1Coj9HQ9P9tlTcWH1I9GzfFLUIS9PEs1Jk&output=JSON'
  },
];