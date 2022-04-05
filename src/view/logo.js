import React, { useContext } from 'react';

import { AppContext } from '../controller/app-context';
import { useCssLogo } from './styles/styles';
import './styles/styles.css';
import icon from './images/logo.svg';

/** vp - is abbreviated from the viewport */
export const Logo = () => {
   const styles = useCssLogo();
   const { vpWidth, SMALL_VP_BREAKEPOINT } = useContext(AppContext);

   const isTitle = vpWidth >= SMALL_VP_BREAKEPOINT;

   return (
      <>
         <a href='/' className='hover-scale' >
            <div style={styles.wrapper}>
               <img
                  src={icon}
                  alt='The logo of the company'
                  style={styles.icon}
               />
               {
                  isTitle
                  &&
                  <p style={styles.title}>
                     CONVERTER
                  </p>
               }
            </div>
         </a>
      </>
   );
};
