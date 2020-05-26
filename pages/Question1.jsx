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
  IonButtons,
  IonBackButton,  
} from "@ionic/react";
import { useHistory } from "react-router-dom";

function Question1() {


function storeCoordinate(xVal, yVal, nameVal,array) {
    array.push({x: xVal, y: yVal ,name: nameVal});
}

var squardArray = [];

var coords = [];
var x_coord = [];
var y_coord = [];
const x_max ,x_min ,y_max,y_min;
storeCoordinate(-3, 3, 'P1', coords);
storeCoordinate(3, 3,'P2', coords);
storeCoordinate(-6, 0,'P3', coords);
storeCoordinate(0, 0,'P4', coords);
storeCoordinate(3, 0,'P5', coords);
storeCoordinate(-3, -3,'P6', coords);
storeCoordinate(0, -3,'P7', coords);
storeCoordinate(3, -3,'P8', coords);
// to loop through coordinate values
for (var i = 0; i < coords.length; i++) {
    var x = coords[i].x;
    var y = coords[i].y;
    x_coord.push(x);
    y_coord.push(y);
}
// console.log(coords);
// console.log("max x " ,Math.max(...x_coord));
// console.log("min x " ,Math.min(...x_coord));

x_max = Math.max(...x_coord);
x_min = Math.min(...x_coord);
y_max = Math.max(...y_coord);
y_min = Math.min(...y_coord);
// console.log("min y " ,y_min);
// console.log("max y " ,y_max);

coords.map((item, key) => {
  var current_coor = item;
  console.log("current coort big loop" ,current_coor);
  coords.map((item, key) => {
    if(current_coor != item){
      // console.log("compare current coord with other in lower loop " ,item);
      var two_x_range = item.x - current_coor.x;
      var two_y_range = item.y - current_coor.y;
       console.log("x range = " ,two_x_range);
       console.log("y range = " ,two_y_range);
      if(two_x_range === 0){
        console.log("-2 point at same x-axis");
        console.log("-reference point is " ,item );
        console.log("-reference the range is  " ,two_y_range );
        

        //BELOW IS TO generate 2 posible point with reference to Current Point. left or right

        var temp_coor_3yleft = current_coor.y;
        var temp_coor_3yright = current_coor.y;

        var temp_coor_3xleft = current_coor.x - two_y_range ;
        var temp_coor_3xright = current_coor.x + two_y_range;

        
        

        const found_left = coords.some(el => el.x === temp_coor_3xleft && el.y === temp_coor_3yleft );
        console.log("(",temp_coor_3xleft + ","+temp_coor_3yleft+")");
        console.log("found in array ?" ,found);
        // console.log("posible Point 3x down (" ,temp_coor_3xdown + ","+temp_coor_3ydown+")" );
        const found = coords.some(el => el.x === temp_coor_3xright && el.y === temp_coor_3yright );
        console.log("(",temp_coor_3xright + ","+temp_coor_3yright+")");
        console.log("found in array ?" ,found);
        if(found_left){//valid third point. procced to predict forth point
          var squareObj = [];
          var point_4x_right = current_coor.x - two_y_range;
          var point_4y_right = current_coor.y + two_y_range; //y-axis down
           console.log("point 4 = right (",point_4x_right  + ","+point_4y_right+")");
            const found = coords.some(el => el.x === point_4x_right && el.y === point_4y_right );
            if(found){
                     if(found){            
            var squarePointList = []; //tmp reference
            for (var i = 0; i < coords.length; i++) {
              // console.log("coords[i]");
              // console.log(coords[i]);
              if(coords[i].x == current_coor.x && coords[i].y == current_coor.y ){
                  squarePointList.push(coords[i].name);
              }
              if(coords[i].x == item.x && coords[i].y == item.y ){
                  squarePointList.push(coords[i].name);
              }              
              if(coords[i].x == temp_coor_3xleft && coords[i].y == temp_coor_3yright ){
                  squarePointList.push(coords[i].name);
              }
              if(coords[i].x == point_4x_right && coords[i].y == point_4y_right ){
                  squarePointList.push(coords[i].name);
              }
            }
            squarePointList.sort();
            var combinePoint = squarePointList.join('');

            squardArray.push(combinePoint);
          
          }  
            }

        }


        
      }else if(two_y_range === 0){
        console.log("-2 point at same y-axis");
        console.log("-reference point is " ,item );
        
        // console.log("x - axis range is " ,two_x_range);
        // console.log("posible coordiant to create a squard");

        //BELOW IS TO generate third point. there are  2 posible point with reference to Current Point. up or down

        var temp_coor_3yup = current_coor.y + two_x_range;
        var temp_coor_3ydown = current_coor.y - two_x_range;
        var temp_coor_3xup = current_coor.x ;
        var temp_coor_3xdown = current_coor.x ;

        // var temp_coor_4yup = current_coor.y + two_x_range;
        // var temp_coor_4ydown = current_coor.y - two_x_range;
        // var temp_coor_4xup = current_coor.x ;
        // var temp_coor_4xdown = current_coor.x ;

        //console.log("posible Point 3x up (" ,temp_coor_3xup + ","+temp_coor_3yup+")" );
        const found = coords.some(el => el.x === temp_coor_3xup && el.y === temp_coor_3yup );
        //console.log("found in array ?" ,found);
        // console.log("posible Point 3x down (" ,temp_coor_3xdown + ","+temp_coor_3ydown+")" );
        const found = coords.some(el => el.x === temp_coor_3xdown && el.y === temp_coor_3ydown );
        // console.log("found in array ?" ,found);
        if(found){ //if the predicted third point is valid , proceed predict forth point
          // console.log("posible Point 4 down base on 3 point ==" );
          // console.log("(",temp_coor_3xdown + ","+temp_coor_3ydown+")");
          // console.log("(",current_coor.x + ","+current_coor.y+")");
          // console.log("(",item.x + ","+item.y+")"); 
          // console.log("get the name of point");//easier to indentify;


          var squareObj = [];
          var point_4x_down = current_coor.x + two_x_range;
          var point_4y_down = current_coor.y - two_x_range; //y-axis down
          // console.log("point 4 = down (",point_4x_down  + ","+point_4y_down+")");
          const found = coords.some(el => el.x === point_4x_down && el.y === point_4y_down );
          if(found){
            // squareObj.push({x:current_coor.x,y:current_coor.y})// current reference point
            // squareObj.push({x:item.x ,y:item.y }); //a reference point
            // squareObj.push({x:temp_coor_3xdown,y:temp_coor_3ydown});// a third predict point - verify to be exist          
            // squareObj.push({x:point_4x_down,y:point_4y_down});// a fourth predict point - verify             

            var squarePointList = []; //tmp reference
            for (var i = 0; i < coords.length; i++) {
              // console.log("coords[i]");
              // console.log(coords[i]);
              if(coords[i].x == current_coor.x && coords[i].y == current_coor.y ){
                  squarePointList.push(coords[i].name);
              }
              if(coords[i].x == item.x && coords[i].y == item.y ){
                  squarePointList.push(coords[i].name);
              }              
              if(coords[i].x == temp_coor_3xdown && coords[i].y == temp_coor_3ydown ){
                  squarePointList.push(coords[i].name);
              }
              if(coords[i].x == point_4x_down && coords[i].y == point_4y_down ){
                  squarePointList.push(coords[i].name);
              }
            }
            squarePointList.sort();
            var combinePoint = squarePointList.join('');

            squardArray.push(combinePoint);
          
          }                    

        }
              
        
        //console.log(coords);


        // console.log("create point up or down to y axis AND CHECK IF AWALABLE IN THE LIST");
        // console.log("create POINT OPPOSITE THE POINT");        

      }else{
        console.log("!!!!-2 point at diff axis2")
        console.log("-reference point is " ,item );
        if(two_x_range < 0 && two_y_range <0){
          console.log("will predice a point which is right and down");
          var point_4x_right = current_coor.x - two_x_range;
          var point_4y_down = current_coor.y + two_y_range; //y-axis down         
        }else if(two_x_range < 0 && two_y_range >0){
          
          console.log("will predice a point which is right and up");

        }else if(two_x_range > 0 && two_y_range <0){
            console.log("will predice a point which is left and down");
            var point_4x_right = current_coor.x - two_x_range;
            var point_4y_down = current_coor.y + two_y_range; //y-axis down
        }else if(two_x_range > 0 && two_y_range >0){          
          console.log("will predice a point which is left and up");
          var point_4x_right = current_coor.x - two_x_range;
          var point_4y_down = current_coor.y + two_y_range; //y-axis down

        }

        console.log("(",point_4x_right + ","+point_4y_down+")");

        //BELOW IS TO generate third point. there are 2 posible point with reference to Current Point. up/down or left/right





      }                
    }  
    // console.log("for P" ,key );
    // console.log("the coordination is " ,item)
    console.log("---------------------------------------------------");
});
  console.log("#############################################");
});

var unique = Array.from(new Set(squardArray))
      console.log("FINAL STEP FILTER UNIQ" ,unique);
    
      return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/question/list" />
          </IonButtons>
          <IonTitle>
            Question 1
          </IonTitle>          
        </IonToolbar>
      </IonHeader>
      <IonContent>        
      </IonContent>
    </IonPage>
  );  
}

export default Question1;