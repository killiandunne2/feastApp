import React from 'react';
import { IonCard, IonTitle, IonImg } from '@ionic/react';

const Chef = (props) => {

  const convertName = startingString => startingString.replace('_', ' ');

  return (
    <IonCard>
      <IonTitle>{convertName(props.chefName)}</IonTitle>
      <IonImg src={`../images/${props.chefName}/${props.chefName}.jpg`} />
      <IonImg src={`../images/${props.chefName}/${props.chefName}_1.jpg`} />
      <IonImg src={`../images/${props.chefName}/${props.chefName}_2.jpg`} />
      <IonImg src={`../images/${props.chefName}/${props.chefName}_3.jpg`} />
    </IonCard>
  );
};

export default Chef;