import React from 'react';

import { AppContext } from '../../controller/app-context';
import { useCssRates } from '../styles/styles';
import '../styles/styles.css';

export const CurrencyRates = () => {
   const context = React.useContext(AppContext);
   const styles = useCssRates();

   const isMediumSize = (
      context.vpWidth >= context.SMALL_VP_BREAKEPOINT
      && context.vpWidth < context.MEDIUM_VP_BREAKEPOINT
   );

   return (
      <div id='rates' style={styles.wrapper}>
         <span style={styles.title}>
            NBU rates for 100
            <span style={{
               ...styles.title,
               ...styles.special
            }}>
               UAH
            </span>
         </span>
         {
            context.rates && context.rates.map((rate, index) => {
               if(rate.title !== 'UAH') {
                  if(!isMediumSize) {
                     if(index < 3) {
                        return (
                           <div key={rate.title} style={styles.ratesBox}>
                              <span style={styles.values}>
                                 {Math.round((100 / rate.rate) * 1000) / 1000}
                              </span>
                              <span style={styles.names}>
                                 {rate.title}
                              </span>
                           </div>
                        )
                     }
                  } else {
                     return (
                        <div key={rate.title} style={styles.ratesBox}>
                           <span style={styles.values}>
                              {Math.round((100 / rate.rate) * 1000) / 1000}
                           </span>
                           <span style={styles.names}>
                              {rate.title}
                           </span>
                        </div>
                     )
                  }
               }
            })
         }
      </div>
   );
};
