import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  isPlatform,
} from "@ionic/react";
import { create, trash, addOutline } from "ionicons/icons";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";

const CourseGoals = () => {
  const selectedCourseId = useParams().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId); //get course by id

  const deleteGoalHAndler = () => {
    console.log("Delete");
  };

  const startEditGoalHandler = () => {
    event.stopPropagation();
    console.log("Edit");
  };

  const startAddGoalHandler = () => {
    console.log("Add..");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "No Course found!"}
          </IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton onClick={startAddGoalHandler}>
                <IonIcon slot="icon-only" icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side="start">
                  <IonItemOption onClick={deleteGoalHAndler} color="danger">
                    <IonIcon slot="icon-only" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines="full"
                  // button
                  // onClick={deleteItemHAndler}
                >
                  <IonLabel>{goal.text}</IonLabel>
                  {/* <IonButton
                  fill="clear"
                  color="dark"
                  slot="end"
                  onClick={startEditGoalHandler}
                >
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton> */}
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot="icon-only" icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
        {isPlatform("android") && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="secondary" onClick={startAddGoalHandler}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
