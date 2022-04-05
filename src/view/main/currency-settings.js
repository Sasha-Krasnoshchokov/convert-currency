import React from 'react';

import { useCssCurrencySelection } from '../styles/styles';

export const CurrencySettings = ({
   rates,
   isBase,
   selectValue,
   inputValue,
   changeAmount,
   changeCurrency,
}) => {
   const styles = useCssCurrencySelection();

   return (
      <section
         id='currency-settings'
         style={styles.wrapper}
      >
         <h3 style={styles.title}>
            {
               isBase
               ? 'A base '
               : 'An into '
            }
            currency and amount
         </h3>
         <div style={styles.settings}>
            <input
               type='number'
               id={isBase ? 'base' : 'into'}
               value={inputValue || ''}
               onChange={(event) => changeAmount(event.target)}
               className='hover'
               style={styles.input}
            />
            <select
               id={isBase ? 'base' : 'into'}
               onChange={(event) => changeCurrency(event.target)}
               className='hover'
               style={styles.select}
            >
               <option value=''>{selectValue}</option>
               {
                  rates.filter(rate => rate.title !== selectValue).map((rate, index) => {
                     return (
                        <React.Fragment key={rate.id}>
                           <option value={rate.title}>{rate.title}</option>
                        </React.Fragment>
                     )
                  })
               }
            </select>
         </div>
      </section>
   );
};
