import { useContext } from 'react';

import { AppContext } from '../../controller/app-context';

/** VP || vp - is abbreviated from the viewport */
const COLORS = {
   darkPrimary: '#070744',
   darkSecondary: '#2e2e44',
   lightPrimary: '#edfcfd',
   lightSecondary: '#3a3a99',
   special: '#fc6203',
};

const FLEX_ROW_CENTER = {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
};
const FLEX_COLUMN_CENTER = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
};

export const useCssFooter = () => {
   // const { heightHeaderFooter, padding } = useGeneralSizes();
   const { heightHeaderFooter, padding } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_COLUMN_CENTER,
         height: `${heightHeaderFooter}px`,
         padding,
         background: `linear-gradient(${COLORS.darkPrimary} 30%, ${COLORS.darkSecondary})`,

      },
      title: {
         height: '100%',
         color: COLORS.special,
      },
   });
};

export const useCssCurrencySelection = () => {
   // const {marginBottom, fontSizePrimary, borderRadius} = useGeneralSizes();
   const {marginBottom, fontSizePrimary, borderRadius} = useContext(AppContext);

   return (
      {
         wrapper: {
            ...FLEX_ROW_CENTER,
            justifyContent: 'space-between',
            width: '80%',
            height: '4rem',
            padding: '0.4rem 0.8rem',
            marginBottom,
            borderRadius,
            backgroundColor: COLORS.lightPrimary,
            opacity: '0.8',
         },
         title: {
            width: '100%',
            textAlign: 'center',
            fontSize: fontSizePrimary,
            color: COLORS.darkPrimary
         },
         settings: {
            ...FLEX_ROW_CENTER,
            height: '100%',
         },
         input: {
            boxSizing: 'border-box',
            width: '10rem',
            height: '100%',
            textAlign: 'center',
            fontSize: fontSizePrimary,
            color: COLORS.lightPrimary,
            border: 'none',
            borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
            backgroundColor: COLORS.darkPrimary,
            outLine: 'none',
         },
         select: {
            boxSizing: 'border-box',
            width: '8rem',
            height: '100%',
            textAlign: 'center',
            fontSize: fontSizePrimary,
            fontWeight: '600',
            color: COLORS.special,
            border: 'none',
            borderRadius: `0 ${borderRadius} ${borderRadius} 0`,
            backgroundColor: COLORS.darkPrimary,
            outLine: 'none',
         },
      }
   );
};

export const useCssContent = () => {
   // const { padding, beforeMediumSize, titlePrimary } = useGeneralSizes();
   const { padding, beforeMediumSize, titlePrimary } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_COLUMN_CENTER,
         height: '100%',
         padding: '1rem 1.5rem',
      },
      title: {
         textAlign: 'center',
         padding,
         marginBottom: beforeMediumSize ? '1.2rem' : '2.4rem',
         fontSize: titlePrimary,
         fontWeight: '700',
         letterSpacing: 1.5,
         color: COLORS.lightPrimary,
      },
      exchanges: {},
   });
};

export const useCssAdvertizing = () => {
   // const { padding } = useGeneralSizes();
   const { padding } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_COLUMN_CENTER,
         padding,
      },
      title: {
         color: COLORS.special,
      },
   });
};

export const useCssAside = () => {
   // const { padding } = useGeneralSizes();
   const { padding } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_COLUMN_CENTER,
         padding,
      },
      title: {
         color: COLORS.special,
      },
   });
};

export const useCssMain = () => {
   // const {
   //    vpHeight,
   //    heightHeaderFooter,
   //    beforeMediumSize,
   //    isSmallSize,
   // } = useGeneralSizes();
   const {
      vpHeight,
      heightHeaderFooter,
      beforeMediumSize,
      isSmallSize,
   } = useContext(AppContext);

   return ({
      wrapper: {
         display: 'flex',
         flexDirection: 'row',
         minHeight: `${vpHeight- 2 * heightHeaderFooter }px`,
         background: `linear-gradient(${COLORS.darkPrimary} 10%, ${COLORS.lightSecondary} 50%, ${COLORS.darkPrimary})`,
      },
      asideWrapper: {
         width: isSmallSize ? '0' : '30vw',
         backgroundColor: COLORS.lightPrimary,
      },
      contentWrapper: {
         width: '100%',
      },
      advertisingWrapper: {
         width: beforeMediumSize ? '0' : '30vw',
         backgroundColor: COLORS.lightPrimary,
      },
   });
};

export const useCssMenu = () => {
   // const {
   //    borderRadius,
   //    fontSizePrimary,
   //    beforeMediumSize,
   //    isLargeSize
   // } = useGeneralSizes();
   const {
      borderRadius,
      fontSizePrimary,
      beforeMediumSize,
      isLargeSize
   } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_ROW_CENTER,
         height:'100%',
         borderRadius,
      },
      wrapperOpen: {
         ...FLEX_ROW_CENTER,
         justifyContent: 'space-between',
         boxSizing: 'border-box',
         padding: '1rem 1.5rem',
         zIndex: '1',
         position: 'absolute',
         width: '100%',
         height: beforeMediumSize ? '5.6rem' : '7.2rem',
         top: '0',
         left: '0',
         backgroundColor: COLORS.lightPrimary,
      },
      opennerCloser: {
         ...FLEX_ROW_CENTER,
         border: 'none',
         background: 'none',
      },
      list: {
         ...FLEX_ROW_CENTER,
         justifyContent: 'space-around',
         width: beforeMediumSize ? '90vw' : '30vw',
         height: '100%',
         borderRadius,
         listStyle: 'none',
      },
      items: {
         ...FLEX_ROW_CENTER,
         justifyContent: 'center',
         width: beforeMediumSize ? '20vw' : '8vw',
         height: '100%',
         fontSize: fontSizePrimary,
         fontWeight: '600',
         color: COLORS.darkPrimary,
         border: isLargeSize ? 'none' : `2px solid ${COLORS.darkPrimary}`,
         borderRadius: '0.4rem',
         backgroundColor: COLORS.lightPrimary,
      },
      icon: {
         width: beforeMediumSize && '3.6rem',
         borderRadius: '4px',
         backgroundColor: COLORS.lightPrimary,
      },
   });
};

export const useCssRates = () => {
   // const {
   //    padding,
   //    borderRadius,
   //    fontSizePrimary,
   //    fontSizeSecondary,
   //    isSmallSize,
   //    beforeMediumSize,
   // } = useGeneralSizes();
   const {
      padding,
      borderRadius,
      fontSizePrimary,
      fontSizeSecondary,
      isSmallSize,
      beforeMediumSize,
   } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_ROW_CENTER,
         justifyContent: 'space-around',
         width: beforeMediumSize ? '65vw' : '45vw',
         height: '100%',
         padding,
         borderRadius,
         backgroundColor: COLORS.lightPrimary,
      },
      title: {
         color: COLORS.darkPrimary,
         fontSize: fontSizePrimary,
         fontWeight: '600',
      },
      special: {
         color: COLORS.special,
      },
      ratesBox: {
         ...FLEX_ROW_CENTER,
         borderRadius,
         border: `1px solid ${COLORS.darkPrimary}`,
      },
      names: {
         textAlign: 'center',
         padding: '0.4rem 0.3rem',
         fontSize: fontSizeSecondary,
         fontWeight: '600',
         color: COLORS.special,
      },
      values: {
         textAlign: 'center',
         width: isSmallSize ? '4rem' : '5.2rem',
         padding: '0.4rem 0.3rem',
         fontSize: fontSizeSecondary,
         fontWeight: '600',
         color: COLORS.darkPrimary,
      },
   });
};

export const useCssLogo = () => {
   // const {
   //    padding,
   //    gap,
   //    borderRadius,
   //    fontSizePrimary,
   //    beforeMediumSize
   // } = useGeneralSizes();
   const {
      padding,
      gap,
      borderRadius,
      fontSizePrimary,
      beforeMediumSize
   } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_ROW_CENTER,
         padding,
         gap,
         borderRadius,
         backgroundColor: COLORS.lightPrimary,
      },
      icon: {
         width: beforeMediumSize ? '3rem' : '4rem',
      },
      title: {
         fontSize: fontSizePrimary,
         fontWeight: '600',
         color: COLORS.special,
      },
   });
};

export const useCssHeader = () => {
   // const { heightHeaderFooter } = useGeneralSizes();
   const { heightHeaderFooter } = useContext(AppContext);

   return ({
      wrapper: {
         ...FLEX_ROW_CENTER,
         justifyContent: 'space-between',
         width: '100%',
         height: `${heightHeaderFooter}px`,
         padding: '1rem 1.5rem',
         background: `linear-gradient(${COLORS.darkSecondary} 40%, ${COLORS.darkPrimary})`,
      },
   });
};

export const useCssAlarm = () => {
   // const { REM } = useGeneralSizes();
   const { REM } = useContext(AppContext);

   return ({
      wrapper: {
         padding: `${(100 - REM * 3) / 2}vh 0`,
         textAlign: 'center',
         backgroundColor: COLORS.lightPrimary,
      },
      title: {
         fontSize: '2rem',
         lineHeight: `${REM}vh`,
         color: COLORS.darkPrimary,
      },
   });
};
