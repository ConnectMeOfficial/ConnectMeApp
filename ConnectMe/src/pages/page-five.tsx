import React from 'react';
import { IonButton, IonInput, IonItem, IonList, IonHeader, IonContent, IonNavLink, IonButtons, IonBackButton, IonToolbar, IonTitle, IonLabel } from '@ionic/react';

import Sesion from './page-two';

function Olvide() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle style={{ fontSize: '2em' }}>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
        <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Nueva contraseña</h1>

        <IonList style={{ maxWidth: '500px', margin: '0 auto' }}>
          <IonItem lines="none" style={{ marginBottom: '30px' }}>
            <IonLabel style={{ fontSize: '1.5em', display: 'block', marginBottom: '10px' }}>Nueva contraseña</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em', padding: '15px', textAlign: 'center' }}></IonInput>
          </IonItem>

          <IonItem lines="none" style={{ marginBottom: '30px' }}>
            <IonLabel style={{ fontSize: '1.5em', display: 'block', marginBottom: '10px' }}>Confirmar contraseña</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em', padding: '15px', textAlign: 'center' }}></IonInput>
          </IonItem>
        </IonList>
        <div style={{ marginTop: '50px' }}>
          <IonNavLink routerDirection="forward" component={() => <Sesion />}>
            <IonButton style={{ padding: '20px', fontSize: '1.5em', fontWeight: 'bold' }}>
              Cambiar contraseña
            </IonButton>
          </IonNavLink>
        </div>
      </IonContent>
    </>
  );
}

export default Olvide;
