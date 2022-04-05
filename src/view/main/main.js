import React from 'react';

import { AppContext } from '../../controller/app-context';
import { useCssMain } from '../styles/styles';
import { Aside } from './aside';
import { Content } from './content';
import { Advertising } from './advertising';

export const Main = () => {
   const { vpWidth, SMALL_VP_BREAKEPOINT, MEDIUM_VP_BREAKEPOINT } = React.useContext(AppContext);
   const styles = useCssMain();

   return (
      <>
         <main id='main' style={styles.wrapper}>
            {
               vpWidth >= SMALL_VP_BREAKEPOINT
               && (
                  <div id='aside' style={styles.asideWrapper}>
                     <Aside />
                  </div>
               )
            }
            <div id='content' style={styles.contentWrapper}>
               <Content />
            </div>
            {
               vpWidth >= MEDIUM_VP_BREAKEPOINT
               && (
                  <div id='advertising' style={styles.advertisingWrapper}>
                     <Advertising />
                  </div>
               )
            }
         </main>
      </>
   );
};
