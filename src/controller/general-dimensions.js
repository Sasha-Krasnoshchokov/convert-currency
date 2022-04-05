
export const generalDimensions = (context, vpSizes) => {

   if(context) {
      const isSmallSize = vpSizes.vpWidth < context.SMALL_VP_BREAKEPOINT;
      const beforeMediumSize = vpSizes.vpWidth < context.MEDIUM_VP_BREAKEPOINT;
      const isLargeSize = vpSizes.vpWidth >= context.LARGE_VP_BREAKEPOINT;

      return ({
         ...vpSizes,
         isSmallSize,
         beforeMediumSize,
         isLargeSize,
         vpHeight: window.innerHeight,
         REM: context.REM,
         gap: beforeMediumSize ? '0.5rem' : '1rem',
         padding: beforeMediumSize ? '0.3rem' : '0.6rem',
         marginBottom: beforeMediumSize ? '1.2rem' : '2.4rem',
         borderRadius: beforeMediumSize ? '0.2rem' : '0.4rem',
         fontSizePrimary: beforeMediumSize ? '1.2rem' : '1.6rem',
         fontSizeSecondary: beforeMediumSize ? '1.1rem' : '1.4rem',
         titlePrimary: beforeMediumSize ? '1.6rem' : '2rem',
         titleSecondary: beforeMediumSize ? '1.4rem' : '1.8rem',
         heightHeaderFooter: beforeMediumSize ? (5.6 * context.REM) : (7.2 * context.REM),
      });
   }
};
