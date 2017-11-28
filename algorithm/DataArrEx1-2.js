//Left Rotation
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n, left;
[n, left] = input[0].split(" ").map(Number);
var arr = input[1].split(" ");
var cut = arr.splice(0, left);
//arr = arr.concat(cut);
arr.push(...cut);
console.log(arr.join(" "));



//Sparse Arrays
/*
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var sizeData = Number(input[0]);
var sizeQuestion = Number(input[sizeData + 1]);
var data = [];
var question = [];
var count = 0;

for(var i = 0; i < sizeData; i++){
    data.push(input[1 + i]);
}

for(var i = 0; i < sizeQuestion; i++){
    question.push(input[sizeData + 2 + i]);
}
console.log(sizeData, sizeQuestion, data, question);
*/




var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var count = 0;


function readLine(){
    /*
    var str = input[count];
    count++
    return str;
    */
    return input[count++];
}

var n = Number(readLine());
var data = [];
for(var i = 0; i < n; i++){
    data.push(readLine());
}
var nq = Number(readLine());
var question = [];
for(var i = 0; i <nq; i++){
    question.push(readLine());
}
//console.log(n, data, nq, question);

question.forEach(function(x){
    var c = 0;
   for(var i = 0; i < data.length; i++){
       if(data[i] == x){
           c++;
       }
   } 
    console.log(c);
});


/*
question.forEach(function(x){
    var c = 0;
    data.forEach(function(y){
        if(x == y){
            c++;
        }
    })
    console.log(c);
});

*/



//핸드폰번호 가리기
function hide_numbers(s){
	var arr = s.split("");
  for(var i = 0; i < arr.length - 4; i++){
  	arr[i] = '*';    
      }
  return arr.join("");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));



//정규표현식 핸드폰 가리기
function hide_numbers(s){

  var re = /(\d+)(\d{4})/
  var match = re.exec(s);
  var star = match[1].replace(/\d/g,'*');

  return star + match[2];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));



function hide_numbers(s){
  
  return s.replace(/\d(?=\d{4})/g,'*');
                  
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));










