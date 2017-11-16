var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var arr = [];
var stringArr = input[1].split(" ");



//1. 기본으로 풀기
for(var i = 0; i < n; i++){
    arr[i] = Number(stringArr[i]);
}

var str = "";
for(var j = n - 1; j >= 0; j--){
    str += arr[j] + " ";
}



//2. forEach를 사용
stringArr.forEach(function(n){
        
    arr.unshift(Number(n));

 });
var str = "";

arr.forEach(function(n){
    str += n + " ";
});

console.log(str);


//3. map를 사용
stringArr.map(function(n){
    return Number(n);
});
stringArr.reverse();

var str = "";

stringArr.forEach(function(n){
    str += n + " ";
});

console.log(str);

