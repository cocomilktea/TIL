//hourglasses
//2D Array - DS
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = [];

for(var i = 0; i < 6; i++){
    arr.push(input[i].split(' ').map(Number));
}
var max = sumOfHourglass(arr, 0, 0);

function sumOfHourglass(arr, i, j){
    var sum1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    var sum2 = arr[i + 1][j + 1];
    i = i + 2;
    var sum3 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];  
    return sum1 + sum2 + sum3;
}


for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
        var s = sumOfHourglass(arr, i, j);
        if(max < s){
            max = s;
        }
    }   
}
console.log(max);
