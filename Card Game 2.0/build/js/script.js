
function first(){
  createCard("all","html");
  checkLength();


  for(key in cards){
    if(cards[key]["name"] != "Mana Crystal"){
      selectAble[key] = cards[key]["name"];
    }
  }
}

function addHtml(html){
  document.getElementsByClassName("deck")[0].innerHTML = document.getElementsByClassName("deck")[0].innerHTML + html;
}

function addField(html){
  document.getElementsByClassName("battlefield")[0].innerHTML = document.getElementsByClassName("battlefield")[0].innerHTML + html;
}

function addHand(html){
  document.getElementsByClassName("hand")[0].innerHTML = document.getElementsByClassName("hand")[0].innerHTML + html;
}

/*function changeSize(name,width){
  card = document.getElementsByClassName(name)[0];
  card.style.width = width+"px";
  card.style.height = (width * 1.91428)+"px";
  card.getElementsByClassName("image")[0].style.height = (width / 1.1)+"px";
  card.getElementsByClassName("description")[0].style.height = (width * 0.62)+"px";
}*/

function clearError(){
  document.getElementsByClassName("error")[0].remove();
}
function clearShadow(){
  if(selected == shadowEffect){
    document.getElementsByClassName(shadowEffect)[0].style.boxShadow = "0px 0px 50px 20px #000";
  }
}
function showError(message){
  addHtml("<div class='error' style='top: calc(50vh - 75px)'>"+message+"</div>")
  window.setTimeout(clearError,1500);
}

function checkLength(){
  if(Object.keys(players["player"+curPlayer]["deck"]).length == 30){
    document.getElementsByClassName("button finish-deck")[0].classList.add("ready");
  }
  else{
    document.getElementsByClassName("button finish-deck")[0].classList.remove("ready");
  }
}

function removeFromDeck(card){
  for(key in players["player"+curPlayer]["deck"]){
    if(players["player"+curPlayer]["deck"][key] == cards[card]["name"]){
      if(!selectAble[card]){
        selectAble[card] = cards[card]["name"];
        document.getElementsByClassName("card "+card)[0].style.opacity = "1";
        row = document.getElementsByClassName("row "+card)[0];
        row.style.borderRadius = "25px";
        row.style.padding = "0px";
        row.innerHTML = "<div class='row "+card+"'>"+cards[card]["name"]+"</div>";
        delete players["player"+curPlayer]["deck"][key];
        checkLength();
        return;
      }

      document.getElementsByClassName("row "+card)[0].remove();
      delete players["player"+curPlayer]["deck"][key];
      checkLength();
      return;
    }
  }
}

function rowClicked(card){
  removeFromDeck(card);
}

function clearDeck(){
  document.getElementsByClassName("deck-cards")[0].innerHTML = "";
  document.getElementsByClassName("decklist")[0].innerHTML = "";
  createCard("all","","html");

  for(key in cards){
    if(cards[key]["name"] != "Mana Crystal"){
      selectAble[key] = cards[key]["name"];
    }
  }

  for(key in players["player"+curPlayer]["deck"]){
    delete players["player"+curPlayer]["deck"][key];
  }
}

function autoGenerate(){
  cardsLeft = (30-Object.keys(players["player"+curPlayer]["deck"]).length);

  if(cardsLeft > 0){
    randInt = Math.round(Math.random() * Object.keys(selectAble).length);
    count = 0;

    for(key in selectAble){
      count++;

      if(randInt == count){
        window.setTimeout(function(){addToDeck(key); autoGenerate()},25);
        break;
      }
    }
  }
}

function drawCard(cardName,amount){
  if(players["player"+curPlayer]["hand"].length < 10){
    if(amount){
      if(cardName == "random"){
        randInt = Math.round(Math.random() * (Object.keys(players["player"+curPlayer]["leftInDeck"]).length-1));

        window.setTimeout(function(){
          console.log("Full name card: "+players["player"+curPlayer]["leftInDeck"][randInt]);
          if(players["player"+curPlayer]["leftInDeck"][randInt].charAt(players["player"+curPlayer]["leftInDeck"][randInt].length-2) > 0){
            console.log("Run createCard("+players["player"+curPlayer]["leftInDeck"][randInt].slice(0,-2)+")");
            createCard(players["player"+curPlayer]["leftInDeck"][randInt].slice(0,-2),players["player"+curPlayer]["leftInDeck"][randInt],"hand");
          }
          else{
            console.log("Run createCard("+players["player"+curPlayer]["leftInDeck"][randInt].slice(0,-1)+")");
            createCard(players["player"+curPlayer]["leftInDeck"][randInt].slice(0,-1),players["player"+curPlayer]["leftInDeck"][randInt],"hand");
          }

          players["player"+curPlayer]["hand"].push(players["player"+curPlayer]["leftInDeck"][randInt]);
          players["player"+curPlayer]["leftInDeck"].splice(randInt,1);
          drawCard("random",amount-1);
          updateHand();
        },350);
      }
      else{
        console.log(cardName);
        for(i = 0; i < players["player"+curPlayer]["leftInDeck"].length; i ++){
          if(players["player"+curPlayer]["leftInDeck"][i] == cardName){
            players["player"+curPlayer]["hand"].push(players["player"+curPlayer]["leftInDeck"][i]);
            players["player"+curPlayer]["leftInDeck"].splice(i,1);
            updateHand();
          }
        }
      }
    }
  }
}

function showMessage(message,duration){
  document.getElementsByClassName("message")[0].innerHTML = message;
  //window.setTimeout(function(){document.getElementsByClassName("message")[0].remove()},duration);
}

function finishDeck(){
  if(Object.keys(players["player"+curPlayer]["deck"]).length == 30){
    if(curPlayer == 1){
      document.getElementsByClassName("deck-cards")[0].innerHTML = "";
      document.getElementsByClassName("decklist")[0].innerHTML = "";
      document.getElementsByClassName("button finish-deck")[0].innerHTML = "Start Game";
      createCard("all","","html");

      for(key in cards){
        if(cards[key]["name"] != "Mana Crystal"){
          selectAble[key] = cards[key]["name"];
        }
      }

      curPlayer = 2;
      document.getElementsByClassName("deck-title")[0].innerHTML = "Player 2 Deck:";
      checkLength();
    }
    else{
      document.getElementsByClassName("deck")[0].remove();
      document.getElementsByClassName("decklist")[0].remove();
      document.body.innerHTML = "<div class='battlefield'><div class='player1-stats'><p>Player 1</p><p>Health: 50</p><p>Mana: 1</p></div><div class='message'>Player 1 choose your cards</div><div class='player2-stats'><p>Player 2</p><p>Health: 50</p><p>Mana: 1</p></div></div><div class='card-selection'><div class='accept-button' onclick='accept()'>Accept</div></div><div class='hand'></div>";
      document.body.classList.remove("scrollbar");

      startGame();
      showMessage("Player 1 choose your cards",0);
    }
  }
}

function accept(){
  len = players["player"+curPlayer]["hand"].length;

  for(i = (len-1); i >= 0; i--){
    if(document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].getElementsByClassName("cross")[0]){
      document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].remove();
      console.log("Removing: "+players["player"+curPlayer]["hand"][i]);
      players["player"+curPlayer]["leftInDeck"].push(players["player"+curPlayer]["hand"][i]);
      players["player"+curPlayer]["hand"].splice(i,1);
      updateHand();
      window.setTimeout(function(){accept()},500);
      removed++;
      return;
    }
  }

  drawCard("random",removed);
  removed = 0;

  window.setTimeout(function(){
    if(curPlayer == 1){
      curPlayer = 2;
      showMessage("Player 2 choose your cards",0);

      for(i = 0; i < players["player1"]["hand"].length; i++){
        document.getElementsByClassName(players["player1"]["hand"][i])[0].style.display = "none";
      }

      drawCard("random",3);
      createCard("manacrystal","manacrystal2","hand");
      players["player2"]["hand"].push("manacrystal2");
      updateHand();
    }
    else{

    }
  },3000);
}

function startGame(){
  curPlayer = 1;
  game = 1;

  for(u = 1; u <= 2; u++){
    for(i = 0; i < 30; i++){
      str = (players["player"+u]["deck"]["slot"+i].replace(/\s+/g, '')).toLowerCase();

      for(c = 0; c < players["player"+u]["leftInDeck"].length; c++){
        if(players["player"+u]["leftInDeck"][c] == str+u){
          console.log("Creating a duplicate card for "+str);
          if(players["player"+u]["dupes"][str]){
            players["player"+u]["dupes"][str] = Object.keys(players["player"+u]["dupes"][str]).length+1;
          }
          else{
            players["player"+u]["dupes"][str] = 1;
          }

          console.log(players["player"+u]["leftInDeck"][c]+" saved as "+str+u+players["player"+u]["dupes"][str]);
          players["player"+u]["leftInDeck"].push(str+u+players["player"+u]["dupes"][str]);
          skip = 1;
        }
      }

      if(!skip){
        players["player"+u]["leftInDeck"].push(str+u);
      }

      skip = 0;

      console.log(players["player"+u]["leftInDeck"]+" --> "+players["player"+u]["leftInDeck"].length);
    }
  }

  drawCard("random",4);
}

function updateHand(){
  console.log("Updating hand "+players["player"+curPlayer]["hand"]);

  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    max = 9.75*players["player"+curPlayer]["hand"].length;
    calc = max*(i/players["player"+curPlayer]["hand"].length);

    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.bottom = "calc("+yOffset+" - 110px)";
    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.left = (48.3+(-max/2+calc))+"vw";
  }
}

function updateField(){
  count = 0;

  for(key in battlefield){
    count++;
    max = 10*Object.keys(battlefield).length;
    calc = max*(count/Object.keys(battlefield).length);
    document.getElementsByClassName(key)[0].style.left = 35+(-max/2+calc)+"vw";
    document.getElementsByClassName(key)[0].style.zIndex = "0";
    updateHand();
  }

  count = 0;
}

function playCard(card){
  console.log("Clicked "+card);
  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    if(players["player"+curPlayer]["hand"][i] == card){
      if(!yOffset){
        /* Add the card to the battlefield */
        battlefield[card] = card;
        players["player"+curPlayer]["hand"].splice(i,1);
        console.log("added "+battlefield[card]+" to the battlefield");
        console.log("card "+battlefield[card]);
        cardDiv = document.getElementsByClassName("card "+battlefield[card])[0];
        cardDiv.style.bottom = "20vh";
        cardDiv.style.transform = "scale(0.4)";
        updateField();
        break;
      }
      else if(card != "manacrystal2"){
        selection = document.getElementsByClassName(card)[0];

        if(selection.getElementsByClassName("cross")[0]){
          selection.getElementsByClassName("cross")[0].classList.remove("cross");
        }
        else{
          selection.innerHTML = selection.innerHTML + "<div class='cross'></div>";
        }
      }
    }
  }
}
