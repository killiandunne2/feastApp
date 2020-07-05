import React from 'react';
import { IonModal, IonTitle, IonButton, IonContent, IonLabel, IonItemDivider, IonList, IonListHeader, IonItem, IonRadio, IonRadioGroup } from '@ionic/react';

const ModalScreen = (props) => {
  let zipValid = Boolean(props.zip);

  return (
    <IonContent>
      <IonButton>Another button example</IonButton>
      <IonModal isOpen={!zipValid} className="modal-size">
        <IonList className="ion-padding-end" >
          <IonRadioGroup value={props.zip} onIonChange={e => props.changeZip(e.detail.value)}>
            <IonListHeader>
              <IonTitle>Zip Code</IonTitle>
            </IonListHeader>
            <IonItem>
              <IonLabel>90000</IonLabel>
              <IonRadio slot="start" value="90000" />
            </IonItem>
            <IonItem>
              <IonLabel>90001</IonLabel>
              <IonRadio slot="start" value="90001" />
            </IonItem>
            <IonItem>
              <IonLabel>90002</IonLabel>
              <IonRadio slot="start" value="90002" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonModal>
      <IonButton onClick={() => props.changeZip(true)}>
        Change zip
      </IonButton>
    </IonContent>
  );
};

export default ModalScreen;