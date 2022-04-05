import React from 'react';

import { Logo } from '../logo';
import { CurrencyRates } from './currency-rates';
import { Menu } from './menu';
import { useCssHeader } from '../styles/styles';

/** vp - is abbreviated from the viewport */
export const Header = () => {
   const styles = useCssHeader();

   return (
      <header style={styles.wrapper}>
         <Logo />
         <CurrencyRates />
         <Menu />
      </header>
   );
};
