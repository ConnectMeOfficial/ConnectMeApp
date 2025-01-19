import React from 'react';
import { IonInput, IonItem, IonList, IonBackButton, IonButtons, IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle, IonText } from '@ionic/react';

import ConnectMe from './page-three';
import Olvide from './page-five';

function Sesion() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
        <h1>Iniciar Sesión</h1>
        <IonList>
          <IonItem>
            <IonInput 
              label="Correo electrónico" 
              type="email" 
              placeholder="email@domain.com" 
              style={{ fontSize: '20px', padding: '10px' }} 
            />
          </IonItem>
          <IonItem>
            <IonInput 
              label="Contraseña" 
              type="password" 
              value="password" 
              style={{ fontSize: '20px', padding: '10px', marginTop: '20px' }} 
            />
          </IonItem>
        </IonList>
        <IonNavLink routerDirection="forward" component={() => <Olvide />}>
          <IonText style={{ fontSize: '16px', color: 'blue', cursor: 'pointer', marginTop: '20px', display: 'inline-block' }}>
            Olvidé mi contraseña
          </IonText>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <ConnectMe />}>
          <IonButton style={{ padding: '20px', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }} expand="block">
            Continuar
          </IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default Sesion;
