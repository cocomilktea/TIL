//Birthday Cake Candles
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = Number(input[0]);
var numbers = input[1].split(" ").map(Number);
var max = numbers[0];
var count = 0;
for(var i = 1; i < n; i++){
    if(max < numbers[i]){
         max = numbers[i];
    }  
}
for(var i = 0; i < n; i++){
    if(max == numbers[i]){
        count++;
    }
}

console.log(count);


//Time Conversion
var input = require('fs').readFileSync('/dev/stdin').toString();
var hh = input.slice(0, 2);
var ms = input.slice(2, 8);
var pm = input.slice(8, 10);

if(hh == "12" && pm == "AM"){
    hh = "00";
}
if(pm == "PM" && hh != "12"){
    hh = Number(hh) + 12;
}
console.log(hh+ms);



