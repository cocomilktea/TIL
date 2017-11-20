var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var numbers = input[1].split(" ");
var result = 0;
for(var i = 0; i < n; i++){
	result += Number(numbers[i]);
}
console.log(result);




//엘리스랑 밥 
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var alice = input[0].split(" ").map(Number);
var bob = input[1].split(" ").map(Number);

var aScore = 0;
var bScore = 0;
var output;
for(var i = 0; i < 3; i++){
    if(alice[i] > bob[i]){
        aScore++;
    }
    if(alice[i] < bob[i]){
        bScore++;
    }
}
output = (aScore +" "+ bScore);
console.log(output);


//배열에 있는 큰수 더하기
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var numbers = input[1].split(" ").map(Number);
var result = 0;

for(var i = 0; i < n; i++){
    result += numbers[i];
}

console.log(result);


//좌대각 우대각 합 구하기
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var n = Number(input[0]);
var arr = [];
var left = 0;
var right = 0;


for(var i = 0; i < n; i++){
    arr[i] = input[i + 1].split(" ").map(Number);
}

for(var i = 0; i < n; i++){
    left += arr[i][i];
}

for(var i = 0; i < n; i++){
    var x = n - 1;
    right += arr[x - i][i];
    
}

console.log(Math.abs(left - right));


