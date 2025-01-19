import React from 'react';
import { IonButton, IonNavLink, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import Havatar from './././hijo/page-Havatar';
import Hchat from './././hijo/page-Hchat';
import Hemociones from './././hijo/page-Hemociones';
import Hfamilia from './././hijo/page-Hfamilia';

function ConnectMe() {
  return (
    <>
      <IonHeader>
        <IonToolbar style={{ height: '80px' }}>
          <IonTitle style={{ fontSize: '40px', fontWeight: 'bold' }}>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '95px', marginTop: '95px' }}>
          <IonNavLink routerDirection="forward" component={() => <Havatar />}>
            <IonButton style={{ width: '150px', height: '250px', fontSize: '20px', fontWeight: 'bold' }}>Avatar</IonButton>
          </IonNavLink>
          <IonNavLink routerDirection="forward" component={() => <Hchat />}>
            <IonButton style={{ width: '150px', height: '250px', fontSize: '20px', fontWeight: 'bold' }}>Chat</IonButton>
          </IonNavLink>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IonNavLink routerDirection="forward" component={() => <Hemociones />}>
            <IonButton style={{ width: '150px', height: '250px', fontSize: '20px', fontWeight: 'bold' }}>Emociones</IonButton>
          </IonNavLink>
          <IonNavLink routerDirection="forward" component={() => <Hfamilia />}>
            <IonButton style={{ width: '150px', height: '250px', fontSize: '20px', fontWeight: 'bold' }}>Familia</IonButton>
          </IonNavLink>
        </div>
      </IonContent>
      
  
    </>
  );  
}

export default ConnectMe;


