function update(){
  document.getElementById("message").innerHTML = "Cookie1, Size: "+cookie1.size+", ChocolateChips: "+cookie1.hasChocolateChips+"<br>Cookie2, Size: "+cookie2.size+", ChocolateChips: "+cookie2.hasChocolateChips;
}

class CookieCutter{
  constructor(size, hasChocolateChips){
    this.size = size;
    this.hasChocolateChips = hasChocolateChips;

    this.addChocolateChips = function(){
      this.hasChocolateChips = true;
    }

    this.removeChocolateChips = function(){
      this.hasChocolateChips = false;
    }
  }
}

var cookie1 = new CookieCutter('medium',true);
var cookie2 = new CookieCutter('large',false);

function add(v){
  if(v == 1){
    if(cookie1.hasChocolateChips){
      cookie1.removeChocolateChips();
    }
    else{
      cookie1.addChocolateChips();
    }
  }
  else if(v == 2){
    if(cookie2.hasChocolateChips){
      cookie2.removeChocolateChips();
    }
    else{
      cookie2.addChocolateChips();
    }
  }

  update();
}
