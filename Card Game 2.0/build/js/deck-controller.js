/* ===== Add a card to the deck of current player ===== */
function addToDeck(cardIndex){
  deckLength = players["player"+curPlayer]["deck"].length;

  /* If deck is not full */
  if(deckLength < 30){
    /* Check if the selected card isn't already 2x in the deck */
    if(cards[cardIndex]["id"] < 2){
      players["player"+curPlayer]["deck"].push(cardIndex);
    }

          document.getElementsByClassName("row "+cardIndex)[0].innerHTML = cards[cardIndex]["name"]+" X2";
          document.getElementsByClassName("row "+cardIndex)[0].style.borderRadius = "0";

          document.getElementsByClassName(cardIndex)[0].style.boxShadow = "0px 0px 40px 20px #FF0";
          document.getElementsByClassName(cardIndex)[0].style.opacity = 0.5;
          window.setTimeout(clearShadow,200);
          shadowEffect = cardIndex;
          checkLength();
          return;
        }
      }

      for(i = 0; i < 30; i++){
        if(!players["player"+curPlayer]["deck"]["slot"+i]){
          players["player"+curPlayer]["deck"]["slot"+i] = selectAble[cardIndex];
          break;
        }
      }

      document.getElementsByClassName("decklist")[0].innerHTML = document.getElementsByClassName("decklist")[0].innerHTML + "<div onclick=\"rowClicked('"+cardIndex+"')\" class='row "+cardIndex+"'>"+cards[cardIndex]["name"]+"</div>";
      document.getElementsByClassName(cardIndex)[0].style.boxShadow = "0px 0px 40px 20px #0F0";

      if(cards[cardIndex]["legend"] == 1){
        document.getElementsByClassName("row "+cardIndex)[0].style.backgroundColor = "#ABABAB";
      }
      else if(cards[cardIndex]["race"] == "Spell"){
        document.getElementsByClassName("row "+cardIndex)[0].style.backgroundColor = "#2488C0";
      }

      checkLength();
    }
    else{
      //showError("Cant have this cardIndex more than 2x in your deck!");
      document.getElementsByClassName(cardIndex)[0].style.boxShadow = "0px 0px 40px 20px #F00";
    }
  }
  /* Deck is full */
  else{
    document.getElementsByClassName(cardIndex)[0].style.boxShadow = "0px 0px 40px 20px #F00";
  }
}
