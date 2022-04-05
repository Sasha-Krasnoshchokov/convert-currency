import React from 'react';

import { useCssAlarm } from './styles/styles';

export const NotificationMessage = ({value}) => {
   const styles = useCssAlarm();

   return (
      <div style={styles.wrapper}>
         <h1 style={styles.title}>
            <p>{`SORRY! We can't display info. `}</p>
            <p>{`The device screen width `}</p>
            <p>{`smaller than ${value}px`}</p>
         </h1>
      </div>
   );
};
