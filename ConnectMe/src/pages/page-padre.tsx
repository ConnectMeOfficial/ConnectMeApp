import React from 'react';
import { IonButton, IonNavLink, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

import Pchat from './././Padres/page-Pchat';
import Pemociones from './././Padres/page-Pemociones';
import IA from './././Padres/page-PIA';

function ConnectMe2() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
       
<div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '0px', marginTop: '650px' }}>
          <IonNavLink routerDirection="forward" component={() => <Pchat/>}>
            <IonButton style={{ width: '125px', height: '100px', fontSize: '18px', fontWeight: 'bold' }}>Mensajes</IonButton>
          </IonNavLink>
          <IonNavLink routerDirection="forward" component={() => <Pemociones/>}>
            <IonButton style={{ width: '125px', height: '100px', fontSize: '18px', fontWeight: 'bold' }}>Emociones</IonButton>
          </IonNavLink>
          <IonNavLink routerDirection="forward" component={() => <IA/>}>
            <IonButton style={{ width: '125px', height: '100px', fontSize: '25px', fontWeight: 'bold' }}>IA</IonButton>
          </IonNavLink>
        </div>
      </IonContent>
    </>
  );
}

export default ConnectMe2;
