import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import Questions from "./Questions";
import MyProfile from "./MyProfile";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

import { list, trophyOutline } from "ionicons/icons";

const CourseTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/question" to="/question/list" exact />
        <Route path="/question/list" exact>
          <Questions />
        </Route>
        <Route path="/profile" exact>
          <MyProfile />
        </Route>   
        
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goal" href="/profile">
          <IonIcon icon={list} />
          <IonLabel>My Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="questions" href="/question/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>All Question</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
