import React from 'react';

import { useCssFooter } from '../styles/styles';

export const Footer = () => {
   const styles = useCssFooter();

   return (
      <footer style={styles.wrapper}>
         <h2 style={styles.title}>Footer</h2>
      </footer>
   );
};
