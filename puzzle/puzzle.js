//숫자퍼즐 구현
//1. html +  js만들기
//<div id="puzzle"><span id="n00"></span></div>
//<div><span id ="n10"></span>
//2. css span을 적당히 키우기
//3. js구현
//버튼 이벤트 리스너 추가 
//어떤 span이 눌렸는지 체크
//움직일 수 있다면 스왑 
//반복
//섞기 (무작위 스왑을 여러번 수행)
//움직인 횟수체크 (스왑한 카운트)
//다 정리했으면 성공! 메시지 출력

var puzzle = document.getElementById('puzzle');
//var key = document.getElementById("n33").innerHTML;

var arr = [];

function generatePuzzle(arr){
	for(var i = 0; i < 4; i++){
		arr[i] = [];
		for(var j = 0; j < 4; j++){
			arr[i][j] = document.getElementById("n"+i+j).innerHTML;
		}
	}
}


function printArr(arr){
	for(var i = 0; i < 4; i++){
		var str = "";
		for(var j = 0; j < 4; j++){
				str += arr[i][j] + " ";
		}
		console.log(str);
	}
}
generatePuzzle(arr);
printArr(arr);


function findNeighbor(arr, n){
	var x = -1; y = -1;
	for(var i = 0; i < 4; i++){
		var k = arr[i].indexOf(n);
		if(k !== -1){
			console.log("찾았")
			x = i;
			y = k;
			break;
		}
	}

	if(x !== -1){
		if(x > 0){
			console.log("up" + arr[x - 1][y]);
		}
		if(y > 0){
			console.log("left" + arr[x][y - 1]);
		}
		if(x < 3){
			console.log("down" + arr[x + 1][y]);
		}
		if(y < 3){
			console.log("right" + arr[x][y + 1]);
		}
		return;
	}
	console.log("못찾음");
}
findNeighbor(arr, "n");



function numClick(event){
	//arr.push(event.target);
	console.log(event.target);
	//console.log(arr);

	if(!event.target.id){
		console.log("outside");
		return;
	}
}


