var cards = {
  /* Goblins */
  goblinranger: {text: "<p><span class='highlight'>On play:</span> deal 1 damage to a minion</p>", name: "Goblin Ranger", mana: 1, attack: 1, brute: 2, health: 3, race: "Goblin"},
  warmonger: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain +2 Health</p>", name: "Warmonger", mana: 2, attack: 3, brute: 6, health: 1, race: "Goblin"},
  goblintwins: {text: "<p><span class='highlight'>On play:</span> Summon another 2/3/2 Goblin on the battlefield</p>", name: "Goblin Twins", mana: 3, attack: 2, brute: 3, health: 2, race: "Goblin"},
  cultmage: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to a character</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent and gain Spelldamage +2</p>", name: "Cult Mage", mana: 4, attack: 1, brute: 2, health: 6, race: "Goblin"},
  sewerassassin: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other Goblins on the board assassinate an enemy minion</p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy deal 3 damage to the opponent</p>", name: "Sewer Assassin", mana: 5, attack: 4, brute: 5, health: 3, race: "Goblin"},
  goblincharger: {text: "<p><span class='highlight'>Charge</span></p><p>At the end of your turn gain +1/+2/0</p>", name: "Goblin Charger", mana: 6, attack: 5, brute: 7, health: 3, race: "Goblin"},
  crookedservant: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this kills an enemy restore 4 health to your hero</p>", name: "Crooked Servant", mana: 7, attack: 7, brute: 10, health: 3, race: "Goblin"},
  dirtymage: {text: "<p>At the end of your turn deal 4 damage to the opponent</p><p><span class='highlight'>On death:</span> Explode and deal 2 damage to all minions</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Dirty Mage", mana: 8, attack: 2, brute: 4, health: 10, race: "Goblin"},
  giant: {text: "<p><span class='highlight'>On play:</span> If you have atleast 2 other goblins on the board gain Taunt</p>", name: "Giant", mana: 9, attack: 9, brute: 12, health: 9, race: "Goblin"},
  goblinprince: {text: "<p><span class='highlight'>On play:</span> All other goblins restore their health</p><p><span class='highlight'>On play:</span> Gain +1/0/0 for each damaged enemy minion</p><p><span class='highlight'>Passive:</span> Your Goblins gain +3/+3/+3</p>", name: "Goblin Prince", mana: 10, attack: 4, brute: 10, health: 4, race: "Goblin", legend: 1},
  kingnilbog: {text: "<p><span class='highlight'>On play:</span> The next minion you play is free</p><p><span class='highlight'>On death:</span> The next spell you cast is free</p>", name: "King Nilbog", mana: 10, attack: 4, brute: 4, health: 10, race: "Goblin", legend: 1},
  /* Beasts */
  thragtusk: {text: "<p><span class='highlight'>Charge</span></p>", name: "Thragtusk", mana: 1, attack: 2, brute: 3, health: 1, race: "Beast"},
  lionheartwarrior: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Lionheart Warrior", mana: 2, attack: 2, brute: 2, health: 3, race: "Beast"},
  dodongo: {text: "<p>At the end of your turn deal 1 damage to all other minions who aren't beasts</p>", name: "Dodongo", mana: 3, attack: 3, brute: 3, health: 4, race: "Beast"},
  lycan: {text: "<p><span class='highlight'>On play:</span> If an enemy minion is damaged gain Charge</p>", name: "Lycan", mana: 4, attack: 5, brute: 2, health: 4, race: "Beast"},
  lurkingcreature: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy regain Stealth</p>", name: "Lurking Creature", mana: 5, attack: 6, brute: 4, health: 4, race: "Beast"},
  jazallionheart: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Restore 3 health to your hero</p><p><span class='highlight'>On death:</span> Restore 3 health to your hero</p>", name: "Jazal Lionheart", mana: 6, attack: 4, brute: 3, health: 7, race: "Beast"},
  baloth: {text: "<p><span class='highlight'>Passive:</span> Gain 0/+1/0 for each damaged minion</p>", name: "Baloth", mana: 7, attack: 8, brute: 6, health: 7, race: "Beast"},
  titan: {text: "<p>At the start of your turn restore this minion's health to full</p>", name: "Titan", mana: 8, attack: 8, brute: 5, health: 10, race: "Beast"},
  mountayn: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>On play:</span> Gain 0/0/+2 for each other beast on the board</p>", name: "Mountayn", mana: 9, attack: 4, brute: 4, health: 12, race: "Beast"},
  grommash: {text: "<p>At the end of your turn gain +1/+1/+1</p><p><span class='highlight'>Passive:</span> If this minion takes damage gain +2/+2/+2</p>", name: "Grommash", mana: 10, attack: 10, brute: 10, health: 10, race: "Beast", legend: 1},
  /* Demons */
  goathead: {text: "<p><span class='highlight'>On death:</span> Deal 3 damage to your hero</p>", name: "Goathead", mana: 1, attack: 2, brute: 2, health: 3, race: "Demon"},
  brutedemon: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion takes damage deal 2 damage to your hero</p>", name: "Brute Demon", mana: 2, attack: 3, brute: 7, health: 3, race: "Demon"},
  fallenknight: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 1 damage to this minion and restore 1 health to your hero</p>", name: "Fallen Knight", mana: 3, attack: 1, brute: 1, health: 7, race: "Demon"},
  hellequin: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>On play:</span> Gain +2/+2/+2 for each card played this turn</p><p><span class='highlight'>On death:</span> Deal damage equal to this minion's attack to all non-Demon minions</p>", name: "Hellequin", mana: 4, attack: 0, brute: 0, health: 1, race: "Demon"},
  dusk: {text: "<p><span class='highlight'>Fury</span></p><p>At the end of your turn deal 1 damage to your other non-Demons minions", name: "Dusk", mana: 5, attack: 5, brute: 3, health: 5, race: "Demon"},
  fallen: {text: "<p><span class='highlight'>Stealth</span></p><p>At the end of your turn deal 3 damage to both players</p>", name: "Fallen", mana: 6, attack: 7, brute: 7, health: 6, race: "Demon"},
  inquisitor: {text: "<p><span class='highlight'>Stealth</span></p><p><span class='highlight'>Passive:</span> Spells cost health instead of mana</p><p><span class='highlight'>Passive:</span> Spelldamage +3</p>", name: "Inquisitor", mana: 7, attack: 8, brute: 2, health: 2, race: "Demon"},
  demonknight: {text: "<p><span class='highlight'>On play:</span> Deal 3 damage to all non-Demon minions</p><p><span class='highlight'>On death:</span> Deal 7 damage to your hero</p>", name: "Demon Knight", mana: 8, attack: 7, brute: 8, health: 7, race: "Demon"},
  bellakor: {text: "<p><span class='highlight'>On play:</span> Deal 5 damage to a minion, if it dies gain +3/+3/+3</p><p><span class='highlight'>On death:</span> Destroy all non-Demon minions on your board</p>", name: "Bel Lakor", mana: 9, attack: 6, brute: 6, health: 6, race: "Demon"},
  doom: {text: "<p><span class='highlight'>On death:</span> Destroy all minions, restore 1 health to your hero for each minion destroyed</p><p><span class='highlight'>Passive:</span> All your Demons gain +2/+2/+2</p>", name: "Doom", mana: 10, attack: 6, brute: 6, health: 6, race: "Demon", legend: 1},
  /* Druids */
  themire: {text: "<p><span class='highlight'>Taunt</span></p>", name: "The Mire", mana: 1, attack: 1, brute: 1, health: 4, race: "Druid"},
  youngmarshsnake: {text: "<p><span class='highlight'>Passive:</span> Destroy any minion that got damaged by this</p>", name: "Young Marsh Snake", mana: 2, attack: 1, brute: 1, health: 4, race: "Druid"},
  healingelf: {text: "<p><span class='highlight'>On play:</span> Restore 4 health to your hero</p><p><span class='highlight'>On death:</span> Restore 2 health to all friendly minions</p>", name: "Healing Elf", mana: 3, attack: 2, brute: 1, health: 4, race: "Druid"},
  vorstclaw: {text: "<p><span class='highlight'>Passive:</span> Whenever this minion kills an enemy restore 5 health to your hero</p>", name: "Vorstclaw", mana: 4, attack: 4, brute: 1, health: 4, race: "Druid"},
  junglemage: {text: "<p><span class='highlight'>On death:</span> Give all Druid minions 0/0/+3</p><p>At the end of your turn restore 2 health to all friendly minions</p>", name: "Jungle Mage", mana: 5, attack: 2, brute: 2, health: 6, race: "Druid"},
  kurnou: {text: "<p><span class='highlight'>Charge</span></p><p><span class='highlight'>Passive:</span> All Druid minions gain charge</p>", name: "Kurnou", mana: 6, attack: 7, brute: 0, health: 5, race: "Druid"},
  voodoodoctor: {text: "<p><span class='highlight'>On play:</span> Add a Voodoo spell to your deck</p><p><span class='highlight'>Passive:</span> Whenever the opponent gets damaged restore 2 health to your hero</p>", name: "Voodoo Doctor", mana: 7, attack: 2, brute: 1, health: 8, race: "Druid"},
  treantprotector: {text: "<p><span class='highlight'>Taunt</span></p><p><span class='highlight'>Passive:</span> Whenever this minion takes damage restore 2 health to your hero</p>", name: "Treant Protector", mana: 8, attack: 6, brute: 3, health: 10, race: "Druid"},
  basilisk: {text: "<p><span class='highlight'>Passive:</span> Whenever a minion gets healed deal 2 damage to all enemy minions</p><p><span class='highlight'>On death:</span> Restore all minions to full health</p>", name: "Basilisk", mana: 9, attack: 8, brute: 9, health: 8, race: "Druid"},
  colosuss: {text: "<p><span class='highlight'>On play:</span> Restore health of all friendly minions</p><p><span class='highlight'>Passive:</span> Your hero is immune to damage</p>", name: "Colosuss", mana: 10, attack: 12, brute: 0, health: 12, race: "Druid", legend: 1},
  /*Spells */
  invasion: {text: "<p><span class='highlight'>Effect:</span> Fill your entire board with 2/3/2 Goblins</p>", name: "Invasion", mana: 7, race: "Spell"},
  silentdeath: {text: "<p><span class='highlight'>Target:</span> Enemy minion</p><p><span class='highlight'>Effect:</span> Destroy an enemy minion</p>", name: "Silent Death", mana: 5, race: "Spell"},
  voodoo: {text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> Whenever this minion loses health deal that much back to the opponent</p>", name: "Voodoo", mana: 3, race: "Spell"},
  playingwithfire: {text: "<p><span class='highlight'>Target:</span> Friendly minion</p><p><span class='highlight'>Effect:</span> If at the start of your next turn the friendly minion still lives deal 5 damage to all enemy minions. If this is not the case deal 5 damage to all of your own minions</p>", name: "Playing With Fire", mana: 6, race: "Spell"},
  manacrystal: {text: "<p><span class='highlight'>Effect:</span> Gain 1 extra Mana crystal this turn</p>", name: "Mana Crystal", mana: 0, race: "Spell"}
};

var players = {
  player1: {
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
var game = 0;
var skip = 0;
var removed = 0;
var yOffset = "calc(50% - 140px)";

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
  document.getElementsByClassName("deck-cards")[0].innerHTML = document.getElementsByClassName("deck-cards")[0].innerHTML + html;
}

function addField(html){
  document.getElementsByClassName("battlefield")[0].innerHTML = document.getElementsByClassName("battlefield")[0].innerHTML + html;
}

function addHand(html){
  document.getElementsByClassName("hand")[0].innerHTML = document.getElementsByClassName("hand")[0].innerHTML + html;
}

function createCard(cardName, cardClass, placement){
  console.log("CREATING CARD "+cardName);
  if(cardName == "all"){
    for(key in cards){
      if(cards[key]["race"] != "Spell"){
        addHtml("<div onclick=\"mouseClick('"+key+"')\" onmouseleave=\"mouseLeave('"+key+"')\" onmouseover=\"mouseOver('"+key+"')\" class='card "+key+(cards[key]["legend"] == 1 ? " legendary" :"")+"'><div class='title'><p class='name'>"+cards[key]["name"]+"</p><p class='mana'>"+cards[key]["mana"]+" Mana</p></div><div class='image'><img src='images/cards/"+cards[key]["name"]+".jpg'></div><div class='stats'><div class='attack'>"+cards[key]["attack"]+"</div><div class='bruteforce'>"+cards[key]["brute"]+"</div><div class='health'>"+cards[key]["health"]+"</div></div><div class='description'>"+cards[key]["text"]+"</div><div class='race'></p>"+cards[key]["race"]+"<p></div></div>");
      }
      else{
        if(cards[key]["name"] != "Mana Crystal"){
          addHtml("<div onclick=\"mouseClick('"+key+"')\" onmouseleave=\"mouseLeave('"+key+"')\" onmouseover=\"mouseOver('"+key+"')\" class='card "+key+" spell'><div class='title'><p class='name'>"+cards[key]["name"]+"</p><p class='mana'>"+cards[key]["mana"]+" Mana</p></div><div class='image'><img src='images/cards/"+cards[key]["name"]+".jpg'></div><div class='description'>"+cards[key]["text"]+"</div><div class='race'></p>"+cards[key]["race"]+"<p></div></div>");
        }
      }
    }
  }
  else if(cards[cardName]["race"] != "Spell"){
    if(placement == "hand"){
      console.log("class='card "+cardClass+(cards[cardName]["legend"] == 1 ? " legendary" :"")+(cards[cardName]["race"] == "Spell" ? " spell" : "")+"'");
      addHand("<div onclick=\"playCard('"+cardClass+"')\" onmouseleave=\"mouseLeave('"+cardClass+"')\" onmouseover=\"mouseOver('"+cardClass+"')\" class='card "+cardClass+(cards[cardName]["legend"] == 1 ? " legendary" :"")+(cards[cardName]["race"] == "Spell" ? " spell" : "")+"'><div class='title'><p class='name'>"+cards[cardName]["name"]+"</p><p class='mana'>"+cards[cardName]["mana"]+" Mana</p></div><div class='image'><img src='images/cards/"+cards[cardName]["name"]+".jpg'></div><div class='stats'><div class='attack'>"+cards[cardName]["attack"]+"</div><div class='bruteforce'>"+cards[cardName]["brute"]+"</div><div class='health'>"+cards[cardName]["health"]+"</div></div><div class='description'>"+cards[cardName]["text"]+"</div><div class='race'></p>"+cards[cardName]["race"]+"<p></div></div>");

      document.getElementsByClassName(cardClass)[0].style.transform = "scale(0.52)";
      document.getElementsByClassName(cardClass)[0].style.position = "absolute";
      document.getElementsByClassName(cardClass)[0].style.margin = "0px";
    }
    else{
      addHtml("<div onmouseleave=\"mouseLeave('"+cardName+"')\" onmouseover=\"mouseOver('"+cardName+"')\" class='card "+cardName+(dupe > 0 ? dupe : "")+(cards[cardName]["legend"] == 1 ? " legendary" :"")+(cards[cardName]["race"] == "Spell" ? " spell" : "")+"'><div class='title'><p class='name'>"+cards[cardName]["name"]+"</p><p class='mana'>"+cards[cardName]["mana"]+" Mana</p></div><div class='image'><img src='images/cards/"+cards[cardName]["name"]+".jpg'></div><div class='stats'><div class='attack'>"+cards[cardName]["attack"]+"</div><div class='bruteforce'>"+cards[cardName]["brute"]+"</div><div class='health'>"+cards[cardName]["health"]+"</div></div><div class='description'>"+cards[cardName]["text"]+"</div><div class='race'></p>"+cards[cardName]["race"]+"<p></div></div>");
    }
  }
  else if(placement == "hand"){
    addHand("<div onclick=\"playCard('"+cardClass+"')\" onmouseleave=\"mouseLeave('"+cardClass+"')\" onmouseover=\"mouseOver('"+cardClass+"')\" class='card "+cardClass+" spell'><div class='title'><p class='name'>"+cards[cardName]["name"]+"</p><p class='mana'>"+cards[cardName]["mana"]+" Mana</p></div><div class='image'><img src='images/cards/"+cards[cardName]["name"]+".jpg'></div><div class='description'>"+cards[cardName]["text"]+"</div><div class='race'></p>"+cards[cardName]["race"]+"<p></div></div>");
    document.getElementsByClassName(cardClass)[0].style.transform = "scale(0.52)";
    document.getElementsByClassName(cardClass)[0].style.position = "absolute";
    document.getElementsByClassName(cardClass)[0].style.margin = "0px";
  }
}

function changeSize(name,width){
  card = document.getElementsByClassName(name)[0];
  card.style.width = width+"px";
  card.style.height = (width * 1.91428)+"px";
  card.getElementsByClassName("image")[0].style.height = (width / 1.1)+"px";
  card.getElementsByClassName("description")[0].style.height = (width * 0.62)+"px";
}

function mouseOver(card){
  original = document.getElementsByClassName(card)[0];
  original.style.boxShadow = "0px 0px 50px 20px #000";

  if(!game){
    original.style.transform = "scale(1.2)";
  }
  else{
    original.style.transform = "scale(0.85)";

    for(key in battlefield){
      if(key == card){
        original.style.transform = "scale(0.55)";
        return;
      }
    }

    original.style.bottom = "calc("+yOffset+" - 30px)";
  }

  original.style.zIndex = "1";
}

function mouseLeave(card){
  original = document.getElementsByClassName(card)[0];
  original.style.boxShadow = "none";

  if(!game){
    original.style.transform = "scale(1)";
  }
  else{
    original.style.transform = "scale(0.52)";

    for(key in battlefield){
      if(key == card){
        original.style.transform = "scale(0.4)";
        return;
      }
    }

    original.style.bottom = "calc("+yOffset+" - 110px)";
  }

  original.style.zIndex = "0";
}

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

function addToDeck(card){
  deckLength = Object.keys(players["player"+curPlayer]["deck"]).length;

  if(deckLength < 30){
    if(selectAble[card]){
      for(key in players["player"+curPlayer]["deck"]){
        if(players["player"+curPlayer]["deck"][key] == selectAble[card]){
          for(i = 0; i < 30; i++){
            if(!players["player"+curPlayer]["deck"]["slot"+i]){
              players["player"+curPlayer]["deck"]["slot"+i] = selectAble[card];
              break;
            }
          }
          delete selectAble[card];

          document.getElementsByClassName("row "+card)[0].innerHTML = cards[card]["name"]+" X2";
          document.getElementsByClassName("row "+card)[0].style.borderRadius = "0";

          document.getElementsByClassName(card)[0].style.boxShadow = "0px 0px 50px 20px #FF0";
          document.getElementsByClassName(card)[0].style.opacity = 0.5;
          window.setTimeout(clearShadow,200);
          shadowEffect = card;
          checkLength();
          return;
        }
      }

      for(i = 0; i < 30; i++){
        if(!players["player"+curPlayer]["deck"]["slot"+i]){
          players["player"+curPlayer]["deck"]["slot"+i] = selectAble[card];
          break;
        }
      }

      document.getElementsByClassName("decklist")[0].innerHTML = document.getElementsByClassName("decklist")[0].innerHTML + "<div onclick=\"rowClicked('"+card+"')\" class='row "+card+"'>"+cards[card]["name"]+"</div>";
      document.getElementsByClassName(card)[0].style.boxShadow = "0px 0px 50px 20px #0F0";
      window.setTimeout(clearShadow,200);
      shadowEffect = card;

      if(cards[card]["legend"] == 1){
        document.getElementsByClassName("row "+card)[0].style.backgroundColor = "#ABABAB";
      }
      else if(cards[card]["race"] == "Spell"){
        document.getElementsByClassName("row "+card)[0].style.backgroundColor = "#2488C0";
      }

      checkLength();
    }
    else{
      //showError("Cant have this card more than 2x in your deck!");
      document.getElementsByClassName(card)[0].style.boxShadow = "0px 0px 50px 20px #F00";
      window.setTimeout(clearShadow,200);
      shadowEffect = card;
    }
  }
  else{
    //showError("Deck is full! Only 30 cards allowed");
    document.getElementsByClassName(card)[0].style.boxShadow = "0px 0px 50px 20px #F00";
    window.setTimeout(clearShadow,200);
    shadowEffect = card;
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

function mouseClick(card){
  addToDeck(card);
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
  if(!document.getElementsByClassName("blocked")[0]){
    for(i = (players["player"+curPlayer]["hand"].length-1); i >= 0; i--){
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
    document.getElementsByClassName("accept-button")[0].classList.add("blocked");

    window.setTimeout(function(){
      document.getElementsByClassName("accept-button")[0].classList.remove("blocked");

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
        yOffset = "0px";

        document.getElementsByClassName("card-selection")[0].remove();
        document.getElementsByClassName("message")[0].classList.add("next-turn");
        document.getElementsByClassName("message")[0].innerHTML = "<div onclick='nextTurn()'>Next Turn</div>";

        for(i = 0; i < players["player2"]["hand"].length; i++){
          document.getElementsByClassName(players["player2"]["hand"][i])[0].style.display = "none";
        }

        for(i = 0; i < players["player1"]["hand"].length; i++){
          document.getElementsByClassName(players["player1"]["hand"][i])[0].style.display = "flex";
        }

        curPlayer = 1;
        updateHand();
      }
    },3000);
  }
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

  drawCard("random",3);
}

function updateHand(){
  console.log("Updating hand "+players["player"+curPlayer]["hand"]);

  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    max = 9.65*players["player"+curPlayer]["hand"].length;
    calc = max*(i/players["player"+curPlayer]["hand"].length);

    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.bottom = "calc("+yOffset+" - 110px)";
    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.left = (48.3+(-max/2+calc))+"vw";
  }
}

function updateField(){
  count = 0;

  for(key in battlefield){
    count++;
    max = 9.65*Object.keys(battlefield).length;
    calc = max*(count/Object.keys(battlefield).length);
    document.getElementsByClassName(key)[0].style.left = 38.3+(-max/2+calc)+"%";
    document.getElementsByClassName(key)[0].style.zIndex = "0";
    updateHand();
  }

  count = 0;
}

/* Actual Game */

function playCard(card){
  console.log("Clicked "+card);
  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    if(players["player"+curPlayer]["hand"][i] == card){
      if(yOffset == "0px"){
        /* Add the card to the battlefield */
        battlefield[card] = card;
        players["player"+curPlayer]["hand"].splice(i,1);
        console.log("added "+battlefield[card]+" to the battlefield");
        console.log("card "+battlefield[card]);
        cardDiv = document.getElementsByClassName("card "+battlefield[card])[0];
        cardDiv.style.bottom = "150px";
        //"calc((100vh - 275px) / 4)"
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

function nextTurn(){
  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.display = "none";
  }

  curPlayer = 3 - curPlayer;

  for(i = 0; i < players["player"+curPlayer]["hand"].length; i++){
    document.getElementsByClassName(players["player"+curPlayer]["hand"][i])[0].style.display = "flex";
  }

  updateHand();
}
