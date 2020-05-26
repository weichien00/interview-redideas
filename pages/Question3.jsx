import React ,{useState ,Component} from "react";
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
} from "@ionic/react";
import { useHistory } from "react-router-dom";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    enrolled: new Date("03/22/2019"),
    goals: [
      { id: "c1g1", text: "Finish the course!" },
      { id: "c1g2", text: "Learn a Lot!" },
    ],
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    enrolled: new Date("05/15/2018"),
    goals: [
      { id: "c2g1", text: "Finish the course!" },
      { id: "c2g2", text: "Learn a Lot! 2" },
    ],
  },
  {
    id: "c3",
    title: "JavaScript - The Complete Guide",
    enrolled: new Date("01/22/2020"),
    goals: [
      { id: "c3g1", text: "Finish the course!" },
      { id: "c3g2", text: "Learn a Lot!" },
    ],
  },
];

class Question2 extends Component {

    constructor(props) {
    super(props);
    this.state = {
      count: 0,
      maxGap:0
    };
  }

   componentDidMount(){
         
    let N = 10001;     
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length-1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
        if (binStr.charAt(startIndexFromEnd) != '0') {
            break;
        }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
        if (binStr.charAt(i) == '0') {
            curMaxGap = curMaxGap+1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }
    this.setState({ maxGap: maxGap })    
  //  return maxGap;
    
  }

  render(){
      return (
    <IonPage>
      <IonHeader>
                <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/question/list" />
          </IonButtons>
          <IonTitle>
            Question 3 {this.state.maxGap}
          </IonTitle>          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>          
        </IonGrid>
      </IonContent>
    </IonPage>
  );

  }
};

export default Question2;