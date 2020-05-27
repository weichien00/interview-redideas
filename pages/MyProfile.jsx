import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon, 
  IonMenuButton, 

} from "@ionic/react";

const AllGoals = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle>Previous Expereince</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                <section>    
  <ul class="my-nav">
    <li>InRoom Hotel and Hotspot System. (2007 - 2009) F/Backend</li>
    <li>Cloud Based Network Management System(2014-2018) F/Backend</li>    
    <li>Android App for Social Network Platform (2018-2019) Frontend</li>
    <li>AVOD System (2018) Integration with Social Network PlatformF/Backend</li>    
    <li>OpenSource Email (2018) Integration with Social Network Platform</li>
    <li>Web Portal/CMS for FX company (2018) F/Backend</li>
    <li>Gaming Server integration (2019) Backend</li>    
    <li>Cloud Based Network Management System Generation II (2019-2020) F/Backend</li>
    <li>Car Service Center Booking System (2020) F/Backend</li>
  </ul>
</section>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              
            </IonCol>
          </IonRow>         

          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
