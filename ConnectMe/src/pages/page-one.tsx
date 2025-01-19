import React from 'react';
import { IonButton, IonHeader, IonContent, IonButtons, IonMenu, IonMenuButton, IonIcon, IonPage, IonNavLink, IonToolbar, IonTitle, IonImg } from '@ionic/react';
import { settings } from 'ionicons/icons';
import Sesion from './page-two';
import Registro from './page-four';
import Admin from './page-admin';

function Inicio() {
  return (
    <>
    <IonMenu side="end" contentId="main-content">
          <IonHeader>
            <IonToolbar>
            <IonTitle>MENU</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent color="light" className="ion-padding ion-text-center">
          <IonNavLink routerDirection="forward" component={() => <Admin/>}>
          <IonButton style={{ padding: '20px', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }} expand="block">
            Admin
          </IonButton>
        </IonNavLink>
          </IonContent>
          </IonMenu>
        <IonPage id="main-content">
      <IonHeader  color="secundary">
        <IonToolbar>
          <IonTitle>ConnectMe</IonTitle>
              <IonButtons slot="end">
                <IonMenuButton> 
                  <IonButton>
                    <IonIcon slot="icon-only" icon={settings}></IonIcon>
                  </IonButton>
                </IonMenuButton>
              </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light" className="ion-padding ion-text-center">
        <h1>ConnectMe</h1>
        <IonImg src= "C:\Users\Alumno 06\Desktop\prototipos\imagenes\WhatsApp Image 2025-01-15 at 7.12.47 PM.jpeg" className="logo-img" />
        <IonNavLink routerDirection="forward" component={() => <Sesion />}>
          <IonButton style={{ padding: '10px', fontSize: '32px', fontWeight: 'bold', marginTop: '100px' }} expand="block">Iniciar Sesion</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Registro />}>
          <IonButton style={{ padding: '10px', fontSize: '40px', fontWeight: 'bold', marginTop: '50px' }} expand="block">Registrarse</IonButton>
        </IonNavLink>
      </IonContent>
         </IonPage>
    </>
  );
}

export default Inicio;
