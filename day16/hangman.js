/*
var random = Math.floor(Math.random()*10);
var randomAnswer = answer[random];
var finalAnswer = randomAnswer.split("");
console.log("debug", randomAnswer);
console.log("debug", finalAnswer);

function addInput(){
	for(var i = 0; i < finalAnswer.length; i++){
		var input = document.createElement("p");
		input.style.width = "20px";
		input.style.height = "20px";
		input.style.border = "1px solid #000";
		input.style.cssFloat = "left";
   		input.setAttribute("id", "input" + i);
    	document.body.appendChild(input);
	}
}
addInput();

function check(){
		var inputStr = document.getElementById("ans").value;
		for(var i = 0; i < finalAnswer.length; i++){
			if(finalAnswer[i] == inputStr){
				var v = document.getElementById("input" + i);
				v.innerHTML = inputStr; //p태그일때
			}
		}
}
check();


var divLife = document.getElementById('life');
var divMesg = document.getElementById('message');
var keys = document.getElementById('keys');
var showButton = document.getElementById('hint_button');
var hintMessage = document.getElementById('hint_msg');
var hintToggle = false;

showButton.onclick = function(){
	if(!hintToggle){
		hintMessage.innerHTML = game.hint;
		hintToggle = true;
	}else{
		hintMessage.innerHTML = "";
		hintToggle = false;
	}
}


for(var i = 'a'.charCodeAt(0); i<='z'.charCodeAt(0); i++){
	var str = String.fromCharCode(i); //???
	var button = document.createElement('button');
	button.innerHTML = str;
	button.className += "alphabet"; //???
	keys.appendChild(button);
	if(str === 'm'){
		keys.appendChild(document.createElement("br"));
	}
}

keys.onclick = function(event){
	if(!!event.target.id){  //???
		console.log("outside");
		return;
	}
	var x = event.target.innerHTML;
	console.log(x);

}

var game = {life : 5, count : 0};
game.init = function(){ //???
	var f = "javascript js;swift ios;starbucks siren;google search;apple stevejobs;codesquad bestAcademy;developer dream";
  var farr = f.split(";");

  var idx = Math.floor(Math.random() * farr.length);
  [this.answer, this.hint] = farr[idx].split(" ");
  this.guess = [];
  for (var i = 0; i < this.answer.length; i++) {
    this.guess.push('_');
  }
};
game.init();
console.log(game);

game.checkWords = function(letter){ //game.~~ letter ???
	var find = false;
	var ans = this.answer;
	for(var i = 0; i < ans.length; i++){
		//맞춤
		if(ans[i] === letter){
			game.count++;
			game.guess[i] = letter;
			find = true;
		}
	}
	//못찾음
	if(!find){ //true??
		game.life--;
	}
};

game.showResult = function(){
	return game.guess.join(" "); //???
}

game.updateDisplay = function(){
	updateLife();
	updateMesg();
	if(this.life === 0){
		this.gameOver();
	}
	if(this.count === this.answer.length){
		this.clear();
	}
};

var updateLife = function(){
	divLife.innerHTML = game.life;
};
var updateMesg = function(){
	divMesg.innerHTML = game.showResult();
};
var showHint = function(){
	alert("Hint:" + answer.hint);
};

game.clear = function(){
	keys.innerHTML = "Cogratulation";
	document.body.style.backgroundColor = "yellow";
	document.getElementById('hint').remove();
}
game.gameOver = function(){
	alert("다음기회에");
	keys.innerHTML = "GameOver";
	document.getElementById('hint').remove();
}
game.updateDisplay();


*/


//get object from html
var divLife = document.getElementById('life');
var divMesg = document.getElementById('message');
var keys = document.getElementById('keys');
var showButton = document.getElementById('hint_button');
var hintMessage = document.getElementById('hint_msg');


//add toggle button
//show hint and hide hint
var hintToggle = false;
showButton.onclick = function() {
  if (hintToggle) {
    hintToggle = false;
    hintMessage.innerHTML = "";
  } else {
    hintToggle = true;
    hintMessage.innerHTML = game.hint;
  }
};

//add button from a to z
//add <br> at m
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++ ) {
  var str = String.fromCharCode(i);  //String 문자열에 관한 static메소드(ex Math.random과 같은 예)
  var button = document.createElement('button');
  button.innerHTML = str;
  button.className += "alphabet";
  keys.appendChild(button);
  if (str === 'm') {
    keys.appendChild(document.createElement("br"));
  }
}

//add event handler to keys div
//이 코드는 버튼을 누른 후에 실행됩니다.
//게임 초기화 코드가 먼저 실행됨
keys.onclick = function(event) {
  console.log(event.target)
  //outside button
  if (!!event.target.id) {
    console.log("outside");
    return;
  }

  //finallay, button clicked!
  var x = event.target.innerHTML;
  //console.log(x);
  //update game status
  game.checkWords(x);
  //update html elements
  updateDisplay();
};



//Initialize Game
var game = {life: 5, count: 0};

game.init = function() {
  var f = "apple#red;banana#yellow;kiwy#green;watermelon#줄무늬 과일;strawberry #red";
  var farr = f.split(";"); //farr[0] = "apple#red"
  var idx = Math.floor(Math.random() * farr.length);
  //[this.answer, this.hint] = farr[idx].split("#");
  var ans_arr = farr[idx].split("#"); //공백보단 평소에 안쓰는걸 구분자로 쓰는게 좋다
  this.answer = ans_arr[0];
  this.hint = ans_arr[1];

  //for user input
  this.guess = [];
  for (var i = 0; i < this.answer.length; i++) {
    this.guess.push('_');
  }
};
game.init();
console.log(game);

game.correct = function(i, letter) {
  this.count++;
  this.guess[i] = letter;
};

game.incorrect = function() {
  this.life--;
};

//update game status when user input
game.checkWords = function(letter) {
  var find = false;
  var ans = this.answer;
  for (var i = 0; i < ans.length; i++) {
    //맞췄다.
    if (ans[i] === letter) {
      game.correct(i, letter);
      find = true;
    }
  }
  //못 찾았다면
  if (!find) {
    game.incorrect();
  }
};

game.showResult = function() {
  return game.guess.join(" ");
};

game.isOver = function() {
  return this.life === 0;
};

game.isClear = function() {
  return this.answer.length == this.count;
};


var updateDisplay = function() {
  updateLife();
  updateMesg();
  if (game.isOver()) {
    game.gameOver();
  }
  if (game.isClear()) {
    game.clear();
  }
};

var updateLife = function() {
  divLife.innerHTML = game.life;
};
var updateMesg = function() {
  divMesg.innerHTML = game.showResult();
};

game.clear = function() {
  keys.innerHTML = "Cogratulation!";
  document.body.style.backgroundColor = "yellow";
  document.getElementById('hint').remove();
}

game.gameOver = function() {
  alert("다음 기회에");
  keys.innerHTML = "Game Over";
  document.getElementById('hint').remove();
}

updateDisplay();







