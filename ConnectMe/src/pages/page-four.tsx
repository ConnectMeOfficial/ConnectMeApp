import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonNavLink } from '@ionic/react';
import ConnectMe2 from './page-padre';
import ConnectMe from './page-three';

const Registro: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>('');
  const [selectedEdad, setSelecteEdad] = useState<string | undefined>('');

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
        <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>Registro</h1>

        <IonList style={{ maxWidth: '500px', margin: '-10px' }}>
          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Nombres</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Apellido Paterno</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Apellido Materno</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Género</IonLabel>
            <IonSelect placeholder="Selecciona tu género" style={{ fontSize: '1.5em' }}>
              <IonSelectOption value="male">Masculino</IonSelectOption>
              <IonSelectOption value="female">Femenino</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Correo electrónico</IonLabel>
            <IonInput type="email" placeholder="email@domain.com" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-10px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Contraseña</IonLabel>
            <IonInput type="password" placeholder="password" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '-8px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Número de teléfono</IonLabel>
            <IonInput type="tel" placeholder="888-888-8888" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>
        </IonList>

          <IonItem lines="full" style={{ maxWidth: '500px', margin: '-10px' }}>
          <IonLabel position="stacked" style={{ fontSize: '2em' }}>¿Qué eres?</IonLabel>
          <IonSelect placeholder="Selecciona tu rol" onIonChange={(e) => setSelectedOption(e.detail.value)} style={{ fontSize: '1.5em' }}>
            <IonSelectOption value="Padre">Padre</IonSelectOption>
            <IonSelectOption value="Hijo">Hijo</IonSelectOption>
          </IonSelect>
        </IonItem>

        {selectedOption === "Padre" && (
          <>
              <IonItem lines="full" style={{ maxWidth: '500px', margin: '-10px' }}>
              <IonLabel position="stacked" style={{ fontSize: '2em' }}>Edad</IonLabel>
              <IonSelect placeholder="Selecciona tu género" onIonChange={(e) => setSelecteEdad(e.detail.value)} style={{ fontSize: '1.5em' }}>
                <IonSelectOption value="opcion1">20-35</IonSelectOption>
                <IonSelectOption value="opcion2">35-40</IonSelectOption>
                <IonSelectOption value="opcion3">40-50</IonSelectOption>
                <IonSelectOption value="opcion4">50-60+</IonSelectOption>

              </IonSelect>
            </IonItem>
            
            {selectedEdad && (
              <IonNavLink routerDirection="forward" component={() => <ConnectMe2 />}>
                <IonButton style={{ width: '150px', height: '80px', fontSize: '25px', fontWeight: 'bold', marginTop: '40px', float: 'right' }}>
                  Crear cuenta
                </IonButton>
              </IonNavLink>
            )}
          </>
        )}

        {selectedOption === "Hijo" && (
          <>
            <IonItem lines="full" style={{ maxWidth: '500px', margin: '-10px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Edad</IonLabel>
            <IonSelect placeholder="Selecciona tu género" onIonChange={(e) => setSelecteEdad(e.detail.value)} style={{ fontSize: '1.5em' }}>
              <IonSelectOption value="opcion5">10-14</IonSelectOption>
              <IonSelectOption value="opcion6">14-16</IonSelectOption>
              <IonSelectOption value="opcion7">16-18</IonSelectOption>
              <IonSelectOption value="opcion8">+18</IonSelectOption>
            </IonSelect>
          </IonItem>
          {selectedEdad && (
          <IonNavLink routerDirection="forward" component={() => <ConnectMe />}>
            <IonButton style={{ width: '150px', height: '80px', fontSize: '25px', fontWeight: 'bold', marginTop: '40px', float: 'right' }} >
              Crear cuenta
            </IonButton>
          </IonNavLink>
          )}
          </>
        )}
        
      </IonContent>
    </>
  );
};

export default Registro;

