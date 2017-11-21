
//Plus Minus
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var numbers = input[1].split(" ").map(Number);
var plus = 0;
var minus = 0;
var zero = 0;
for(var i = 0; i < n; i++){
    if(numbers[i] > 0){
       plus++;
    }
    if(numbers[i] < 0){
        minus++;
    }
    if(numbers[i] == 0){
        zero++;
    }
}

console.log(plus / n);
console.log(minus / n);
console.log(zero / n);


//Staircase ex1
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);

for(var i = 1; i <= n; i++){
    var str = "";
    for(var j = n; j > i; j--){
        str += " ";
    }
    for(var k = 1; k <= i; k++){
          str += "#";
    }
    console.log(str);
}

//Staircase ex2
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);

for(var i = 1; i <= n; i++){
    var s = mark(n - i, ' ');
    s += mark(i, "#");
    console.log(s);
}

function mark(num, m){
            var str = "";
    for(var i = 0; i < num; i++){
        str += m;
    }
    return str;
}

//Staircase ex3
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);

for(var i = 1; i <= n; i++){
    var str = "";
    for(var j = 0; j < n - i; j++){
        str += " ";
    }
    for(var j = 0; j < i; j++){
          str += "#";
    }
    console.log(str);
}



