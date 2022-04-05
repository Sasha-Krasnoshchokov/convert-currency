import React from 'react';

/** vp - is abbreviated from the viewport */
export const useUserViewport = (props) => {
   const [sizes, setSizes] = React.useState({
      vpWidth: window.innerWidth,
      vpHeight: window.innerHeight,
   });

   React.useEffect(() => {
      window.addEventListener("resize", () => {
         setSizes({
            vpWidth: window.innerWidth,
            vpHeight: window.innerHeight,
         });
      });
      return () => setSizes({});
   }, []);

   return sizes;
};

export const listenVPWidth = () => {
   let sizes = window.wi;
   window.addEventListener("resize", () => {
      sizes = {
         vpWidth: window.innerWidth,
         vpHeight: window.innerHeight,
      };
   });

   return sizes;
};
