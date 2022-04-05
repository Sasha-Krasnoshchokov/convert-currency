import React from 'react';

import { AppContext } from '../../controller/app-context';
import { useCssMenu } from '../styles/styles';
import '../styles/styles.css';
import menuOpenner from '../images/menuOpenner.svg'
import menuCloser from '../images/menuCloser.svg'

/** vp - is abbreviated from the viewport */
export const Menu = () => {
   const { vpWidth, MEDIUM_VP_BREAKEPOINT } = React.useContext(AppContext);
   const styles = useCssMenu();

   const [menuSelections, setMenuSelections] = React.useState({
      isMenuOpen: false,
      isContactsOpen: false,
      isFAQOpen: false,
      isLoginOpen: false,
   });

   React.useEffect(() => {
      setMenuSelections({
         ...menuSelections,
         isMenuOpen: false,
      })
   }, [vpWidth]);

   const handleClick = () => {
      setMenuSelections({
         isMenuOpen: !menuSelections.isMenuOpen
      });
   };

   const selectMenuItem = (item) => {

      const isMenuItemOpen = (menuItem) => (
         (menuItem === `is${item}Open`)
            ? !menuSelections[menuItem]
            : false
      );

      setMenuSelections({
         isMenuOpen: !(vpWidth >= MEDIUM_VP_BREAKEPOINT),
         isContactsOpen: isMenuItemOpen('isContactsOpen'),
         isFAQOpen: isMenuItemOpen('isFAQOpen'),
         isLoginOpen: isMenuItemOpen('isLoginOpen'),
      });
   };

   const opennerCloser = (icon) => (
      <button
         className='hover-scale'
         style={styles.opennerCloser}
         onClick={() => handleClick()}
      >
         <img src={icon} style={styles.icon}/>
      </button>
   );

   const menuItem = (menuItem) => (
      <button
         id={menuItem}
         style={styles.items}
         className='hover-scale'
         onClick={(ivent) => selectMenuItem(ivent.target.id)}
      >
         {menuSelections[`is${menuItem}Open`] ? 'OPEN' : menuItem}
      </button>
   );

   return (
      <>
         <div
            style={
               menuSelections.isMenuOpen
               ? styles.wrapperOpen
               : styles.wrapper
            }
         >
            {
               (vpWidth >= MEDIUM_VP_BREAKEPOINT || menuSelections.isMenuOpen)
               ? <>
                  <menu style={styles.list}>
                     {menuItem('Contacts')}
                     {menuItem('FAQ')}
                     {menuItem('Login')}
                  </menu>
                  {menuSelections.isMenuOpen && opennerCloser(menuCloser)}
               </>
               : opennerCloser(menuOpenner)
            }
         </div>
      </>
   );
};
