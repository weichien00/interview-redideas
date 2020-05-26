import React from "react";

/* Theme variables */
import "./theme/variables.css";

import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonPage
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, informationCircle, person, search } from "ionicons/icons";

import MenuTabs from "./pages/MenuTabs";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";

import urls from "./urls";

import Tabs from "./Tabs";

const App = () => {
  console.log("APP");
  return (
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonRouterOutlet>
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to={urls.APP_HOME} />}
            />
            <Route path="/question/list" exact>
              <MenuTabs />
            </Route>
              <Route path="/question/c1"><Question1 /></Route>                          
              <Route path="/question/c2"><Question2 /></Route>                          
              <Route path="/question/c3"><Question3 /></Route>                          
              <Route path="/question/c4"><Question4 /></Route>                          

            <Redirect path="/" to="/question/list" exact />
          </IonRouterOutlet>
          <Route path="/app" component={Tabs} />
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
