var arr = [[1,2,3,],[4,5,6]];
for(var i = 0; i < arr.length; i++){
	for(var j = 0; j < arr[i].length; j++){
		console.log(arr[i],[j]);
	}
}

//연습문제 5*10 배열에 1부터 50까지 채우세요 루프 두개 사용 push는 사용하지 말것
var a = [];
var n = 5;
var m = 10;
//var x = 0;
for(var i = 0; i < n; i++){
	a[i] = [];
	for(var j = 0; j < m; j++){
		//x++;
		//a[i][j] = x;
		a[i][j] = i * m + j + 1;
	}
}
console.log(a);


//위에서 만든 배열을 다시 1차원 배열로 저장 역시 push 사용하지말기 
var b = [];

for(var i = 0; i < n; i++){
	for(var j = 0; j < m; j++){
		b[i * m + j] = a[i][j];
	}
}
console.log(b);


// 2차원 배열의 값을 예쁘게 찍기
// 4 * 4 배열을 함수로 만들어서 찍기
var arr = [];
var n = 4;
var m = 4;
var x = 0;
function printArr(arr){
	for(var i = 0; i < n; i++){
		arr[i] = [];
		for(var j = 0; j < m; j++){
			x++;
			arr[i][j] = x;
		}
	}
	return arr;
}
// var a = printArr(arr);
console.log(printArr(arr));



// 4 * 4 배열에 1부터 1000까지 무작위로 값을 넣고 
// 2차원 배열과 값을 인자로 입력받아서 해당 값이 존재하면 상하좌우값을 출력하는 함수를 작성
// 1. 배열에 값이 있는지 검색
// 2. 값이 없으면 리턴
// 3. 값이 있다면 위쪽 값 검색 및 출력
// 4. 왼쪽, 오른쪽, 아래 출력

var arr = [];

function generateArray(arr){
	for(var i = 0; i < 4; i++){
		arr[i] = [];
		for(var j = 0; j < 4; j++){
			var x = Math.floor(Math.random()*1000 + 1);
			arr[i][j] = x; 
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


function printNeighbor(arr, n){
	var x = -1, y = -1;
	for(var i = 0; i < 4; i++){
		var k = arr[i].indexOf(n);
		if(k !== -1){
			//찾았다
			x = i;
			y = k;
			break;
		}
	}
	if(x !== -1){
		//print above 
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
		return; //꼭필요 안하면 못찾음까지출력됨		
	}
	console.log("못찾음");
}


//4*4 배열을 만들어준다 리턴불필요
generateArray(arr);
//배열을 출력 리턴불필요 출력만
printArr(arr);
//배열의 이웃을 출력 리턴불필요 
printNeighbor(arr, arr[2][2]);
printNeighbor(arr, arr[0][0]);
printNeighbor(arr, arr[3][3]);



//배열의 스왑 구현
var arr = [];
for(var i = 0; i < 4; i++){
	var n = 4 * i;
	arr;
	arr.push([n + 1, n + 2, n + 3, n + 4]);
}
arr[3][3] = 'x';
console.log(arr);

function arrSwap(arr, x1, y1, x2, y2){
 // a[x1][y1] <--> a[x2][y2]
 	var temp = arr[x1][y1];
 	arr[x1][y1] = arr[x2][y2];
 	arr[x2][y2] = temp;
}
arrSwap(arr, 0, 0, 3, 3);

//2차원 배열의 원소 한 칸 옮기기
function arrayMove(arr, x1, y1, pos){
	if(pos == 'up' && x1 > 0){
		arrSwap(arr, x1, y1, x1 - 1, y1);
		return true;
	} else if (pos == 'down' && x1 < 3){
		arrSwap(arr, x1, y1, x1 + 1, y1);
		return true;
	} else if (pos == 'left' && y1 > 0){
		arrSwap(arr, x1, y1, x1, y1 - 1);
		return true;
	} else if (pos == 'right' && y1 < 3){
		arrSwap(arr, x1, y1, x1, y1 + 1);
		return true;
	} else{
		return false;
	}
}


var ok = arrayMove(arr, 3, 3, 'right'); //postion:"left", "right", "up", "down" 예외 : 못옮길경우 false리턴 옮겼을경우 true리턴
console.log(ok); //false
ok = arrayMove(arr, 3, 3, 'left');
console.log(ok); //true

//x 주변의 값찾기
//4 * 4 배열에 1부터 15까지 숫자와
//x가 들어있을 때, x 주변의 숫자를 리턴해 줍시다









