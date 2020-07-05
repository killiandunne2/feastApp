import React from 'react';
import ZipContainer from './ZipContainer';
import { IonHeader, IonTitle } from '@ionic/react';
import CartBox from './CartBox';
import AccountBox from './AccountBox';

const Header = (props) => {
  return (
    <IonHeader>
      <ZipContainer zip={props.zip}/>
      <IonTitle className="title-style ion-padding">Top quality chefs serving you from their kitchen</IonTitle>
      <div className="position-right">
        <CartBox /> 
        <AccountBox />
      </div>
      
    </IonHeader>
  );
};

export default Header;