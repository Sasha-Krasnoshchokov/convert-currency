import React from 'react';

import { useCssAside } from '../styles/styles';

export const Aside = () => {
   const styles = useCssAside();

   return (
      <section style={styles.wrapper}>
         <h2 style={styles.title}>Finance today</h2>
      </section>
   );
};
