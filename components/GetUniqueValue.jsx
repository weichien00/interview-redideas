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

class getUniqueValue extends Component {

    constructor(props) {
    super(props);
    this.state = {
      count: 0,
      uniq:[]
    };
  }

   componentDidMount(){

     console.log("this.props.array" ,this.props.array);
     
     
    var a = [], b = [], prev;
    let arr = this.props.array;
    //let arr = [4, 5, 6, 5, 6];

    if(this.props.array){
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
    this.setState({ uniq: a })    
  }

    }

    

  render(){
      return (    
 <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
              <h2 className="ion-text-center">The result is</h2>
            <h3 className="ion-text-center">{this.state.uniq.map((id,item) => (
            <div key={id}>{id}</div>
          ))}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>



  );

  }
};

export default getUniqueValue