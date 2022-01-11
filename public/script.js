let simon = {
  red : document.getElementById("redButton"),
  green : document.getElementById("greenButton"),
  blue : document.getElementById("blueButton"),
  yellow : document.getElementById("yellowButton"),
  sheesh : new Audio('sheesh.mp3'),
  gameCounter : 0,
  userCounter : 0,
  scoreCounter : 0,
  alive : false,
  userArray : new Array (100),
  answers : new Array(100),
  localColor : 0,

test : function() {
    simon.red.classList.remove('redDerp');
},

getRandomInt : function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min) + min)); //The maximum is exclusive and the minimum is inclusive
},

answers : function() {
  for (let i = 0; i < 100; i++) {
    simon.answers[i] = getRandomInt(1, 5);
  }
  simon.alive = true;
},

flashRed : function() {
  simon.red.classList.remove('redDerp');
  simon.red.classList.add('redLight');
  setTimeout(function () {simon.red.classList.remove('redLight')}, 900);
  setTimeout(function () {simon.red.classList.add('redDerp')}, 900);
},

flashGreen : function() {
  simon.green.classList.remove('greenDerp');
  simon.green.classList.add('greenLight');
  setTimeout(function () {simon.green.classList.remove('greenLight')}, 900);
  setTimeout(function () {simon.green.classList.add('greenDerp')}, 900);
},

flashBlue : function() {
  simon.blue.classList.remove('blueDerp');
  simon.blue.classList.add('blueLight');
  setTimeout(function () {simon.blue.classList.remove('blueLight')}, 900);
  setTimeout(function () {simon.blue.classList.add('blueDerp')}, 900);
},

flashYellow : function() {
  simon.yellow.classList.remove('yellowDerp');
  simon.yellow.classList.add('yellowLight');
  setTimeout(function () {simon.yellow.classList.remove('yellowLight')}, 900);
  setTimeout(function () {simon.yellow.classList.add('yellowDerp')}, 900);
},

showPattern : function () {
  simon.gameCounter++;
  for (let i = 0; i < simon.gameCounter; i++)
  {
      setTimeout(function () {flashColor(simon.answers[i])}, 2000*(i+1));
  }
  let emptyArray = new Array(100);
  simon.userArray = emptyArray;
  simon.userCounter = 0;
},


startGame : function() {
  if (simon.alive == false)
  {
    setsimon.answers();
    showPattern();
  }
},

adjustArray1 : function () {
  simon.localColor = 1;
  if (simon.alive == true && simon.gameCounter != simon.userCounter)
  {
      addPress();
      if (simon.gameCounter == simon.userCounter && arrayMatch() == false)
      {
        simon.alive = false;
        if (simon.scoreCounter > window.localStorage.myHighScore)
        {
          window.localStorage.myHighScore = simon.scoreCounter;
        }
        simon.sheesh.play();
        reset();
      }
      else if (simon.gameCounter == simon.userCounter && arrayMatch() == true)
      {
      simon.scoreCounter++;
      showPattern();
      }
  }
},

adjustArray2 : function () {
  simon.localColor = 2;
  if (simon.alive == true && simon.gameCounter != simon.userCounter)
  {
      addPress();
      if (simon.gameCounter == simon.userCounter && arrayMatch() == false)
      {
        simon.alive = false;
        if (simon.scoreCounter > window.localStorage.myHighScore)
        {
          window.localStorage.myHighScore = simon.scoreCounter;
        }
        simon.sheesh.play();
        reset();
      }
      else if (simon.gameCounter == simon.userCounter && arrayMatch() == true)
      {
      simon.scoreCounter++;
      showPattern();
      }
  }
},

adjustArray3 : function () {
  simon.localColor = 3;
  if (simon.alive == true && simon.gameCounter != simon.userCounter)
  {
      addPress();
      if (simon.gameCounter == simon.userCounter && arrayMatch() == false)
      {
        simon.alive = false;
        if (simon.scoreCounter > window.localStorage.myHighScore)
        {
          window.localStorage.myHighScore = simon.scoreCounter;
        }
        simon.sheesh.play();
        reset();
      }
    if (simon.gameCounter == simon.userCounter && arrayMatch() == true)
      {
      simon.scoreCounter++;
      showPattern();
      }
  }
},

adjustArray4 : function () {
  simon.localColor = 4;
  if (simon.alive == true && simon.gameCounter != simon.userCounter)
  {
      addPress();
      if (simon.gameCounter == simon.userCounter && arrayMatch() == false)
      {
        simon.alive = false;
        if (simon.scoreCounter > window.localStorage.myHighScore)
        {
          window.localStorage.myHighScore = simon.scoreCounter;
        }
        simon.sheesh.play();
        reset();
      }
      if (simon.gameCounter == simon.userCounter && arrayMatch() == true)
      {
      simon.scoreCounter++;
      showPattern();
      }
  }
},


addPress : function() {
    flashColor(simon.localColor);
    simon.userArray[simon.userCounter] = simon.localColor;
    simon.userCounter++;
},

flashColor : function(flash) {
  switch(flash)
  {
    case 1:
    flashRed();
    break;
    case 2:
    flashGreen();
    break;
    case 3:
    flashBlue();
    break;
    case 4:
    flashYellow();
    break;
  }
},

arrayMatch : function() {
  for (let i = 0; i < simon.gameCounter; i++)
  {
    if (simon.userArray[i] != simon.answers[i])
    {
      return false;
    }
  }
  return true;
},

reset : function() {
  empty = new Array (100);
  simon.answers = empty;
  simon.userArray = empty;
  simon.userCounter = 0;
  simon.gameCounter = 0;
  simon.scoreCounter = 0;
  simon.alive = false;
  simon.localColor = 0;
},

showScore : function() {
  alert(window.localStorage.myHighScore);
},

startClick : document.getElementById("starter").addEventListener("click", startGame()),

redClick : document.getElementById("redButton").addEventListener("click", adjustArray1()),

blueClick : document.getElementById("blueButton").addEventListener("click", adjustArray3()),

yellowClick : document.getElementById("yellowButton").addEventListener("click", adjustArray4()),

greenClick : document.getElementById("greenButton").addEventListener("click", adjustArray2()),

scoreClick : document.getElementById("scoreBoard").addEventListener("click", showScore()),
}
