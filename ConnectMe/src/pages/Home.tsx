import { IonContent, IonHeader, IonPage, IonTitle, IonNav, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';
import Inicio from './page-one';




const Home: React.FC = () => {
  return <IonNav root={() => <Inicio />}></IonNav>; 
};

export default Home;
