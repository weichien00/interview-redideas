import React, { useRef, useState, Component } from "react";
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
  IonAlert
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

import { useHistory } from "react-router-dom";

const Question4 = function() {
  const numberInputRef = useRef(null);
  const [output] = useState();
  const [error, setError] = useState();
  const [answer, setAnswer] = useState();

  const inputChangeHandler = () => {
    // write your code in JavaScript (Node.js 6.4.0)

    const enteredValue = Number(numberInputRef.current.value);
    console.log(enteredValue);

    //const enteredValue = 9;
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = enteredValue.toString(2);
    console.log(binStr);
    var startIndexFromEnd = binStr.length - 1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
      if (binStr.charAt(startIndexFromEnd) != "0") {
        break;
      }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
      if (binStr.charAt(i) == "0") {
        curMaxGap = curMaxGap + 1;
      } else {
        if (curMaxGap > maxGap) {
          maxGap = curMaxGap;
        }
        curMaxGap = 0;
      }
    }
    setAnswer(maxGap);
    console.log("the answer" ,answer);
  };

  const clearError = () => {
    setError("");
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/question/list" />
          </IonButtons>
          <IonTitle>Question 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle />
                  <IonCardTitle>Question 4</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>A binary gap within a positive integer N is any maximal sequence of
consecutive zeros that is surrounded by ones at both ends in the binary
representation of N.
For example, number 9 has binary representation 1001 and contains a binary gap of
length 2. The number 529 has binary representation 1000010001 and contains two
binary gaps: one of length 4 and one of length 3. The number 20 has binary
representation 10100 and contains..........
</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {answer?(
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle />
                  <IonCardTitle>Answer for Question 4</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>Binary Gap is {answer}</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>):(
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle />
                  <IonCardTitle>Answer for Question 4</IonCardTitle>
                </IonCardHeader>
                {answer == 0 ?(<IonCardContent>No Binary Gap</IonCardContent>):(<IonCardContent>Please enter number</IonCardContent>)}                
              </IonCard>
            </IonCol>
          </IonRow>)
          }          

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Enter Number</IonLabel>
                <IonInput type="number" ref={numberInputRef} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={inputChangeHandler}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Question4;
