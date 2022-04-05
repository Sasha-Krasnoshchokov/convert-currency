import React from 'react';

import { AppContext } from './controller/app-context';
import { constants } from './model/constants';
import { getInfoFromBank } from './controller/get-info-from-bank';
import { generalDimensions } from './controller/general-dimensions';
import { banks } from './model/banks';
import { Footer } from './view/footer/footer';
import { Header } from './view/header/header';
import { Main } from './view/main/main';
import { NotificationMessage } from './view/notification-message';

export const App = () => {
   const [rates, setRates] = React.useState(null);
   const [vpSizes, setVPSizes] = React.useState({
      vpWidth: window.innerWidth,
   });
   const [mainDimensions, setGeneralDimensions] = React.useState(null);

   const bank = (vpSizes.vpWidth > constants.MIN_VP_BREAKEPOINT) ? banks[0] : null;

   React.useEffect(() => {
         getInfoFromBank(bank, setRates);
   }, [bank]);

   React.useEffect(() => {
      window.addEventListener("resize", () => {
         setVPSizes({
            vpWidth: window.innerWidth,
         });
      });
   }, [vpSizes.vpWidth]);

   React.useEffect(() => {
      setGeneralDimensions(generalDimensions(constants, vpSizes));
   }, [vpSizes]);

   return (
      <AppContext.Provider value={{
         ...constants,
         ...mainDimensions,
         ...rates,
         ...vpSizes
      }}>
         {
            vpSizes.vpWidth < constants.MIN_VP_BREAKEPOINT
            ? <NotificationMessage value={constants.MIN_VP_BREAKEPOINT} />
            : (
               (rates)
               && (
                     <>
                        <Header />
                        <Main />
                        <Footer />
                     </>
                  )
            )
         }
      </AppContext.Provider>
   );
};
