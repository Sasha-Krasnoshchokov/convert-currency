import React from 'react';

import { getInfoFromBank } from '../controller/getInfoFromBank';
import { banks } from './banks';
import { currencies } from './currencies';

/** vp - is abbreviated from the viewport */
export const ratesToDisplay = () => {
   const rates = [];
   // getInfoFromBank(banks[0].url).then(data => console.log({data}))
   return (
      {
         REM: 10,
         MIN_VP_BREAKEPOINT: 420,
         SMALL_VP_BREAKEPOINT: 640,
         MEDIUM_VP_BREAKEPOINT: 960,
         LARGE_VP_BREAKEPOINT: 1024,
         vpWidth,
         vpHeight,
         styles,
         rates: currencies,
      }
   );
};
