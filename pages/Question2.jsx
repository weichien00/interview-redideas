import React ,{useState} from "react";
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
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import UniqueValue  from "../components/GetUniqueValue";

const theArray = [4, 5, 6, 5, 6];

const Question2 = function () {
    return (
    <IonPage>      
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/question/list" />
          </IonButtons>
          <IonTitle>Question 3 {}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle>Question 3</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Return unique number from an array of numbers with conditions only one number is
unique and other numbers are pair (ex: [4, 5, 6, 5, 6], return 4)
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow> 

          <IonRow>
            <IonCol>
              <UniqueValue array={theArray}/>
            </IonCol>
          </IonRow>         

          
        </IonGrid>
      </IonContent>
    </IonPage>
  );

}

export default Question2;