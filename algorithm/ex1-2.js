
/*
var input = require('fs').readFileSync('./test.txt').toString().split('\n');


var n = input[0].split(" ");
var x = n.pop();
console.log(n.length);


var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var count = 0;
input[0].split(" ").forEach(function(word){
    if(word.length > 0){
        count++;
    }
});
console.log(count);
                           

*/


var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length -1; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};
