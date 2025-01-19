import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function Havatar() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Avatar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
        <h1>Avatar</h1>
      </IonContent>
    </>
  );
}

export default Havatar;