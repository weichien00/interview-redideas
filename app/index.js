import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonItem, IonLabel, IonNote, IonBadge, IonList, IonFab, IonFabButton, IonFooter, IonIcon, IonApp, IonPage, IonRouterOutlet  } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

import { add } from 'ionicons/icons';
import './style.css';

const Home = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Title</h1>
              <IonNote>Lorem ipsum dolor sit amet.</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 days
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
              <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> 
      </IonContent>
    </IonPage>
    </>
  );
};


const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

ReactDOM.render(<App />, document.getElementById('root'));