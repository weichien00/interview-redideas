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
} from "@ionic/react";
import { useHistory } from "react-router-dom";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Question 1",
    enrolled: new Date("05/25/2020"),
    goals: [
      { id: "c1g1", text: "Finish the course!" },
      { id: "c1g2", text: "Learn a Lot!" },
    ],
    link:"Question1"
  },
  {
    id: "c2",
    title: "Question 2",
    enrolled: new Date("05/25/2020"),
    goals: [
      { id: "c2g1", text: "Finish the course!" },
      { id: "c2g2", text: "Learn a Lot! 2" },
    ],
    link:"Question2"
  },
  {
    id: "c3",
    title: "Question 3",
    enrolled: new Date("05/25/2020"),
    goals: [
      { id: "c3g1", text: "Finish the course!" },
      { id: "c3g2", text: "Learn a Lot!" },
    ],
    link:"Question3"
  },
];

const Course = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Question</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{course.title}</IonCardTitle>
                    <IonCardSubtitle>
                      Last update {" "}
                      {course.enrolled.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton
                        fill="clear"
                        color="secondary"
                        //routerLink={`/courses/${course.id}`}
                        routerLink={`/question/${course.id}`}
                      >
                        View answer
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Course;