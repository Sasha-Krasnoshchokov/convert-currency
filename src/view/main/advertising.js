import React from 'react';

import { useCssAdvertizing } from '../styles/styles';

export const Advertising = () => {
   const styles = useCssAdvertizing();

   return (
      <section style={styles.wrapper}>
         <h3 style={styles.title}>Advertising</h3>
      </section>
   );
};
