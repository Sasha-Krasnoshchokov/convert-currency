import React from 'react';

import { AppContext} from '../../controller/app-context';
import { CurrencySettings } from './currency-settings';
import { useCssContent } from '../styles/styles';

export const Content = () => {
   const context = React.useContext(AppContext);
   const styles = useCssContent();
   const [exchangeData, setExchangeData] = React.useState({
      base: {
         currency: 'UAH',
         value: 100,
      },
      into: {
         currency: 'USD',
         value: (
            context.rates
            && (Math.round(
               (100 / context.rates.find(item => item.title === 'USD').rate)
               * 1000) / 1000
            )
         ),
      },
   });

   const round = (value) => (Math.round(value * 1000) / 1000);

   React.useEffect(() => {
      setExchangeData({
         base: {
            currency: 'UAH',
            value: round(100),
         },
         into: {
            currency: 'USD',
            value: (
               context.rates
               && round(100 / context.rates.find(item => item.title === 'USD').rate)
            ),
         },
      })
   }, [context.rates]);

   const intoCurrencyRate = (
      context.rates
      && context.rates.find(item => item.title === exchangeData.into.currency).rate
   );
   const baseCurrencyRate = (
      context.rates
      && context.rates.find(item => item.title === exchangeData.base.currency).rate
   );

   const changeAmount = (target) => {
      const byUAHRate = context.rates.find(item => item.title === exchangeData[target.id].currency).rate;

      if(target.id === 'into') {
         setExchangeData({
            base: {
               currency: exchangeData.base.currency,
               value: round(target.value * (byUAHRate / baseCurrencyRate)),
            },
            into: {
               currency: exchangeData.into.currency,
               value: target.value,
            },
         })
      } else {
         setExchangeData({
            base: {
               currency: exchangeData.base.currency,
               value: target.value,
            },
            into: {
               currency: exchangeData.into.currency,
               value: round(target.value * (byUAHRate / intoCurrencyRate)),
            },
         })
      }
   };

   const changeCurrency = (target) => {
      const byUAHRate = context.rates.find(item => item.title === target.value).rate;

      if(target.id === 'into') {
         setExchangeData({
            base: {...exchangeData.base},
            into: {
               currency: target.value,
               value: round(exchangeData.base.value * (baseCurrencyRate / byUAHRate)),
            },
         })
      } else {
         setExchangeData({
            base: {
               currency: target.value,
               value: exchangeData.base.value,
            },
            into: {
               currency: exchangeData.into.currency,
               value: round(exchangeData.base.value * (byUAHRate / intoCurrencyRate)),
            },
         })
      }
   };

   return (
      <section style={styles.wrapper}>
         <h1 style={styles.title}>
            Exchanges an amount of the currency by the
            <span>{` ${context.bank && context.bank.shortTitle} `}</span>
            rates
         </h1>
         {
            context.rates
            &&
            <>
               <CurrencySettings
                  rates={context.rates}
                  isBase
                  selectValue={exchangeData.base.currency}
                  inputValue={exchangeData.base.value}
                  changeAmount={changeAmount}
                  changeCurrency={changeCurrency}
               />
               <CurrencySettings
                  rates={context.rates}
                  selectValue={exchangeData.into.currency}
                  inputValue={exchangeData.into.value}
                  changeAmount={changeAmount}
                  changeCurrency={changeCurrency}
               />
            </>
         }

      </section>
   );
};
