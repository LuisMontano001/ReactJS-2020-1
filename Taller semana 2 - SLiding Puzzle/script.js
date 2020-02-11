window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

var matrix=[[9,8,7],[6,5,4],[3,2,0]];
var keyA,keyW,keyD,keyS;
function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 81: //w
      keyW = true;
      break;
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 81: //w
      keyW = false;
      break;
  }
}



document.addEventListener('keypress', logKey);
function logKey(e){
  
  if(keyA){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(matrix[i][j]===0){
          if(j<2){
            matrix[i][j]=matrix[i][j+1];
            matrix[i][j+1]=0;
            console.log("left")
            i,j=3
          }
        }
      }
    }
  }
  if(keyD){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(matrix[i][j]==0){
          if(j>0){
            matrix[i][j]=matrix[i][j-1];
            matrix[i][j-1]=0;
            console.log("right")
            i,j=3
          }
        }
      }
    }
  }
  //SeEjecuta dos veces
  if(keyW){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(matrix[i][j]==0){
          if(i<2){
            matrix[i][j]=matrix[i+1][j];
            matrix[i+1][j]=0;
            console.log("Up")
            i,j=3
          }
        }
      }
    }
  }
  if(keyS){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(matrix[i][j]==0){
          if(i>0){
            matrix[i][j]=matrix[i-1][j];
            matrix[i-1][j]=0;
            i,j=3
            console.log("Down")
          }
        }
      }
    }
  }
  
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      document.getElementById("div"+i+j).style.backgroundImage= "url("+matrix[i][j]+".jpg)"; 
     }
  }
}