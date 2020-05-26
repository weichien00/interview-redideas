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
  IonAlert,
  IonList,
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";
import UniqueValue from "../components/GetUniqueValue";

import { useHistory } from "react-router-dom";

const Question3 = function () {
  const arrayInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const [output] = useState();
  const [error, setError] = useState();
  const [inputArray, setInputArray] = useState([]);
  const [submitArray, setSubmitArray] = useState();

  const inputAddNumberHandler = () => {
    const enteredNumber = numberInputRef.current.value;
    console.log(enteredNumber);
    setInputArray((prevState) => [...prevState, enteredNumber]);
    console.log(inputArray);
    numberInputRef.current.value = "";
  };

  const inputChangeHandler = () => {
    //setInputArray(null);
    //console.log("hihihasd");
    //const enteredArray = arrayInputRef.current.value;
    //console.log(enteredArray);
    //let xxx = enteredArray;
    //let variable = ["4", "5", "6", "5", "6","7"];
    //console.log(xxx);
    console.log("calculate unique");
    console.log(inputArray);
    if (Array.isArray(inputArray)) {
      console.log("correct");
      setSubmitArray(inputArray);
      console.log("submit array = > ", submitArray);
    } else {
      setError('Please enter a valid array. for example : ["3","4","5","5"]');
      return;
    }

    // weightInputRef.current!.value = ""; //! will not run if null
    // heightInputRef.current!.value = "";
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
                  Return unique values in an array
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          {inputArray.length > 0 && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    {inputArray.map(function (item, i) {
                      return <i key={i}>{item},</i>;
                    })}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Add Number to Array</IonLabel>
                <IonInput type="number" ref={numberInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              {submitArray && <UniqueValue array={submitArray} />}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={inputAddNumberHandler}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Add
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-left">
              <IonButton onClick={inputChangeHandler}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle />
                  <IonCardTitle>remarks</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                   <IonList>
      <IonItem> step 1, Click Add button to add number to form an array  </IonItem>
      <IonItem> Step 2, Click calculate once finish adding number to array </IonItem></IonList>                
                
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Question3;
