import React, { useState } from 'react';
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
} from "@ionic/react";
import { useHistory } from "react-router-dom";

function Question1() {


function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}

var coords = [];
storeCoordinate(-3, 3, coords);
storeCoordinate(3, 3, coords);
storeCoordinate(-6, 0, coords);
storeCoordinate(0, 0, coords);
storeCoordinate(3, 0, coords);
storeCoordinate(-3, -3, coords);
storeCoordinate(0, -3, coords);
storeCoordinate(3, -3, coords);
// to loop through coordinate values
for (var i = 0; i < coords.length; i++) {
    var x = coords[i].x;
    var y = coords[i].y;
} 

console.log(coords);

    
      return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Question 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>        
      </IonContent>
    </IonPage>
  );  
}

export default Question1;