/* ===== Create a card ===== */
function createCard(cardIndex){
  /* Create ALL cards */
  if(cardIndex == "all"){
    for(key in cards){
      /* Create Spell themed cards */
      if(cards[key]["race"] == "Spell"){
        if(cards[key]["name"] != "Mana Crystal"){
          writeDecklist(`
            <div class='card ${key} spell' onclick="mouseClick('${key}')" onmouseleave="mouseLeave('${key}')" onmouseover="mouseOver('${key}')">
              <div class='title'>
                <p class='name'>${cards[key]["name"]}</p>
                <p class='mana'>${cards[key]["mana"]} Mana</p>
              </div>

              <div class='image'>
                <img src='images/cards/${cards[key]["name"]}.jpg'>
              </div>

              <div class='description'>
                <p>${cards[key]["text"]}</p>
              </div>

              <div class='race'>
                <p>${cards[key]["race"]}</p>
              </div>
            </div>`
          );
        }
      }
      /* Create Minion themed cards */
      else{
        writeDecklist(`
          <div class='card ${key} ${(cards[key]["legend"] == 1 ? " legendary" :"")}' onclick="mouseClick('${key}')" onmouseleave="mouseLeave('${key}')" onmouseover="mouseOver('${key}')">
            <div class='title'>
              <p class='name'>${cards[key]["name"]}</p>
              <p class='mana'>${cards[key]["mana"]} Mana</p>
            </div>

            <div class='image'>
              <img src='images/cards/${cards[key]["name"]}.jpg'>
            </div>

            <div class='stats'>
              <div class='attack'>
                <p>${cards[key]["attack"]}</p>
              </div>
              <div class='bruteforce'>
                <p>${cards[key]["brute"]}</p>
              </div>
              <div class='health'>
                <p>${cards[key]["health"]}</p>
              </div>
            </div>

            <div class='description'>
              ${cards[key]["text"]}
            </div>

            <div class='race'>
              </p>${cards[key]["race"]}<p>
            </div>
          </div>
        `);
      }
    }
  }
  /* Create ONE card */
  /* Create a Spell themed card */
  else if(cards[cardName]["race"] == "Spell"){
    var key = cardName;

    writeHand(`
      <div class='card ${key} ${players[key]} spell' onclick="mouseClick('${key}')" onmouseleave="mouseLeave('${key}')" onmouseover="mouseOver('${key}')">
        <div class='title'>
          <p class='name'>${cards[key]["name"]}</p>
          <p class='mana'>${cards[key]["mana"]} Mana</p>
        </div>

        <div class='image'>
          <img src='images/cards/${cards[key]["name"]}.jpg'>
        </div>

        <div class='description'>
          <p>${cards[key]["text"]}</p>
        </div>

        <div class='race'>
          <p>${cards[key]["race"]}</p>
        </div>
      </div>
    `);

    players[key] += 1;
  }
  /* Create a Minion themed card*/
  else{
    var key = cardName;

    writeHand(`
      <div class='card ${key} ${players[key]} ${(cards[key]["legend"] == 1 ? " legendary" :"")}' onclick="mouseClick('${key}')" onmouseleave="mouseLeave('${key}')" onmouseover="mouseOver('${key}')">
        <div class='title'>
          <p class='name'>${cards[key]["name"]}</p>
          <p class='mana'>${cards[key]["mana"]} Mana</p>
        </div>

        <div class='image'>
          <img src='images/cards/${cards[key]["name"]}.jpg'>
        </div>

        <div class='stats'>
          <div class='attack'>
            <p>${cards[key]["attack"]}</p>
          </div>
          <div class='bruteforce'>
            <p>${cards[key]["brute"]}</p>
          </div>
          <div class='health'>
            <p>${cards[key]["health"]}</p>
          </div>
        </div>

        <div class='description'>
          ${cards[key]["text"]}
        </div>

        <div class='race'>
          </p>${cards[key]["race"]}<p>
        </div>
      </div>
    `);

    players[key] += 1;

    /*document.getElementsByClassName(key)[0].style.transform = "scale(0.52)";
    document.getElementsByClassName(key)[0].style.position = "absolute";
    document.getElementsByClassName(key)[0].style.margin = "0px";*/
  }
}
