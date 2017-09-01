var index = 3;

function toggle(u){
  var allSlides = document.getElementsByClassName("slide");
  index+=u;

  if(index > 4){
    index = 1;
  }
  else if(index < 1){
    index = 4;
  }

  for(i = 1; i <= allSlides.length; i++){
    if(i != index){
      allSlides[i].style.display = "none";
    }
    else{
      allSlides[i].style.display = "block";
    }
  }
}

/*document.body.onkeydown = function(event){
  alert(event.keyCode);
  if(event.keyCode == 37){
    alert("Left");
  }
  elseif(event.keyCode == 39){
    alert("right");
  }
}*/
