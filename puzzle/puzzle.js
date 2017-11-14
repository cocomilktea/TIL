
var puzzle = document.getElementById('puzzle');
var up, down, left, right;
var arr = [];
var basicArr = [];


function basicPuzzle(basicArr){
	for(var i = 0; i < 4; i++){
		basicArr[i] = [];
		for(var j = 0; j < 4; j++){
			basicArr[i][j] = i * 4 + j + 1;
		}
	}
	basicArr[3][3] = "#";
}
basicPuzzle(basicArr);
console.log(basicArr);




//1~15숫자와 #을 랜덤으로 퍼즐을 만들어준다
//arr :  퍼즐 배열
//return : 없음
function generatePuzzle(arr){
	var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "#"];

	for(var i = 0; i < 4; i++){
		arr[i] = [];
		for(var j = 0; j < 4; j++){
			var r = Math.floor(Math.random() * num.length -1);
			arr[i][j] = num.splice(r, 1);
		}
	}
}


//배열을 innerHTML로 화면에 뿌려준다
//arr : 퍼즐배열
//return : 없음
function updateHTML(arr) {
	for (var i = 0; i < 4; i++ ) {
		for (var j = 0; j <4; j++) {
			var num = document.getElementById("n"+i+j);
			num.innerHTML = arr[i][j];
			num.style.color = "#7C7877";
			if(num.innerHTML == "#"){
				num.style.background = "#7C7877";
			} else {
				num.style.background = "#ABD0CE	";
			}

		}
	}
}

generatePuzzle(arr);
updateHTML(arr);




//#의 위치를 찾는다
//arr : 퍼즐배열, num : #
//return : 위치값 리턴, 없으면 null
function findPosition(arr, num){
	var pos = {x : -1, y : -1};
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(arr[i][j] == num){
				pos.x = i;
				pos.y = j;
				break;
			}
		}
	}

	if(pos.x !== -1){
		return pos;
	} else {
		return null;
	}
}

console.log(findPosition(arr, '#'));


//'#' 상하좌우 위치에 있는 값 찾기
//arr : 퍼즐배열
//return : 없음
function findNeighbor(arr){
	var key = findPosition(arr, '#');

	
	up = down = left = right = -1; //좌표중에 -1은 없는값
	if(key.x !== -1){
		if(key.x > 0){
			up = arr[key.x - 1][key.y];
		}
		if(key.y > 0){
			left = arr[key.x][key.y - 1];
		}
		if(key.x < 3){
			down = arr[key.x + 1][key.y];
		}
		if(key.y < 3){
			right = arr[key.x][key.y + 1];
		}
	}
	console.log(up, down, left, right);
	return up, down, left, right;
	

}

findNeighbor(arr);


//x1y1 와 x2y2 스왑
//arr : 퍼즐배열, x1y1 : #의 xy, x2y2 : 선택된 값의 xy
//return : 없음 
function arraySwap(arr, x1, y1, x2, y2) {
	var temp = arr[x1][y1];
	arr[x1][y1] = arr[x2][y2];
	arr[x2][y2] = temp;
}


//퍼즐 #과 선택된 값 체인지
//arr : 퍼즐배열, pos : 클릭한 자리의 숫자값 
//return : 없음
function puzzleChange(arr, pos){
	var key = findPosition(arr, '#');
	findNeighbor(arr);

	if(pos == up){
		arraySwap(arr, key.x, key.y, key.x - 1, key.y);
	} else if (pos == down) {
		arraySwap(arr, key.x, key.y, key.x + 1, key.y);
	} else if (pos == left) {
		arraySwap(arr, key.x, key.y, key.x , key.y - 1);
	} else if (pos == right) {
		arraySwap(arr, key.x, key.y, key.x, key.y + 1);
	} else {
		console.log("못 바꿔");
	}	

}

//스왑할 번호선택
function numClick(event){
	var v = event.target.innerHTML;
	puzzleChange(arr, v);
	updateHTML(arr);
}

function reStart(){
	generatePuzzle(arr);
	updateHTML(arr);
}


function checkResult(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(basicArr[i][j] === arr[i][j]){
				//alert("게임끝");

				console.log("게임끝");

			}
		}
	}

}
checkResult();


document.getElementById("puzzle").disabled = true;




