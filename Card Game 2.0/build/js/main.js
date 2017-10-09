/* ===== Variables ===== */

var players = {
  cardID: {

  },
  player1: {
    id: {

    },
    deck: {

    },
    leftInDeck: [

    ],
    hand: [

    ],
    dupes: {

    }
  },
  player2: {
    id: {

    },
    deck: {

    },
    leftInDeck: [

    ],
    hand: [

    ],
    dupes: {

    }
  }
};

var selectAble = {}
var battlefield = {};
var selected = "";
var curPlayer = 1;
var shadowEffect;
var count = 0;
var gameStarted = 0;
var skip = 0;
var removed = 0;
var yOffset = "calc(50% - 140px)";

/* ===== Create ALL cards on startup ===== */
function first(){
  for(i = 1; i <= 2; i++){
    for(key in cards){
      players["cardID"][key] = 0;
    }
  }

  createCard("all");
}

/* ===== HTML writing functions ===== */
function writeDecklist(html){
  var deck = document.getElementsByClassName("deck")[0];
  deck.innerHTML = deck.innerHTML + html;
}

/* ===== Mouse over cards ===== */
function mouseOver(cardIndex,classID){
  if(classID){
    var id = document.getElementsByClassName(cardIndex+" "+classID)[0];
  }
  else{
    var id = document.getElementsByClassName(cardIndex)[0];
  }

  id.style.boxShadow = "0px 0px 40px 20px #000";

  /* Player hovers over a card in hand or on battlefield */
  if(gameStarted){
    /* Player hovers over a card on battlefield */
    for(key in battlefield){
      if(battlefield[key][id] == battlefield[cardIndex][id]){
        id.style.transform = "scale(0.55)";
        return;
      }
    }

    /* Player hovers over a card in hand */
    id.style.transform = "scale(0.85)";
    id.style.bottom = "calc("+yOffset+" - 30px)";
  }
  /* Player hovers over a card in decklist */
  else{
    id.style.transform = "scale(1.2)";
  }

  id.style.zIndex = "1";
}

/* ===== Mouse leaving cards ===== */
function mouseLeave(cardIndex,classID){
  if(classID){
    var id = document.getElementsByClassName(cardIndex+" "+classID)[0];
  }
  else{
    var id = document.getElementsByClassName(cardIndex)[0];
  }

  id.style.boxShadow = "none";

  /* Player hovered over a card in hand or on battlefield */
  if(gameStarted){
    /* Player hovered over a card on battlefield */
    for(key in battlefield){
      if(key == card){
        id.style.transform = "scale(0.4)";
        return;
      }
    }

    /* Player hovered over a card in hand */
    id.style.transform = "scale(0.52)";
    id.style.bottom = "calc("+yOffset+" - 110px)";
  }
  /* Player hovered over a card in decklist */
  else{
    id.style.transform = "scale(1)";
  }

  id.style.zIndex = "0";
}

/* ===== Mouse leaving cards ===== */
function mouseClick(cardIndex){
  addToDeck(cardIndex);
}
