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
} from "@ionic/react";
import { useHistory } from "react-router-dom";

class Question2 extends Component {

    constructor(props) {
    super(props);
    this.state = {
      count: 0,
      uniq:[]
    };
  }

   componentDidMount(){

     let arr = [4, 5, 6, 5, 6,7,7,8];
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
            console.log(i);
            console.log("if");
        } else {
            console.log(i);
            console.log("else");
            b[b.length-1]++;
            a.pop(arr[i]);

        }
        prev = arr[i];
    }

    //return [a, b];
  console.log(a);
  console.log(b);
  //return out;
    this.setState({ uniq: a })    
  //  return maxGap;
    
  }

  render(){
      return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Question 2 {this.state.maxGap}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>    
          {this.state.uniq.map((id,item) => (
            <div key={id}>{id}</div>
          ))}      
        </IonGrid>
      </IonContent>
    </IonPage>
  );

  }
};

export default Question2;