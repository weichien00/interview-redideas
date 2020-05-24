import React from 'react';

/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { home, informationCircle, person, search } from 'ionicons/icons';

import CourseTabs from "./pages/CourseTabs";

import urls from './urls';

import Tabs from './Tabs';

const App = () => {
  return (
  
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonRouterOutlet>            
             <Route exact={true} path="/" render={() => <Redirect to={urls.APP_HOME} />} />
             <Route path="/question" exact><CourseTabs /></Route>
          </IonRouterOutlet>
          <Route path="/app" component={Tabs} />          
        </IonPage>
      </IonReactRouter>
    </IonApp>  
  );
}

export default App;
