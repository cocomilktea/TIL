

//약수찾기
function findD(a) {
	var ans = [];
	for(var i = 1; i < a; i++){
		if(a % i === 0){
			ans.push(i);
		}
	}
	return ans;
}


function findN(n) {
	var an
	var smalls = [1];
	var larges = [n];
	for(var i = 1; i <= Math.floor(n / 2); i++){
		if(n % i === 0){
			smalls.push(i);
			larges.unshift(n / i);
		}
	}
	var set = new Set(smalls.concat(larges));
	var arr = [];
	arr.push(...set);
	return arr;
}




//최대공약수 최소공배수 찾기 
function gcdlcm(a, b) {
    var answer = [];
		answer[0] = findGcd(a, b);
  	answer[1] = findLcm(a, b);
    return answer;
}

function findD(a) {
	var ans = [];
	for(var i = 1; i < a; i++){
		if(a % i === 0){
			ans.push(i);
		}
	}
	return ans;
}
  
//최대공약수 찾기
function findGcd(a, b){
	var ads = findD(a);
	var bds = findD(b);
	var max = 1;
	ads.forEach(function(x){
		if(bds.indexOf(x) != -1){
			max = x;
		}
	});
  return max;
}


function gcdlcm(a, b){
	var answer = [];
	answer[0] = findGcd(a, b);
	answer[1] = findLcm(a, b);
	return answer;
  
}
//최소공배수 찾기
function findLcm(a, b){
	var x = a;
	var count = 1;
	while(true){
		x = a * count;
		if(x % b === 0){
			return x;
		}
		count++;
	}
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));


function gcdlcm(a, b) {
    var answer = [];
    answer[0] = gcd(a,b);
    answer[1] = a * b / answer[0];
    return answer;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));






//알파벳 찾기
var input =  "baekjoon";
var ans = "abcdefghijklmnopqrstuvwxyz";

for(var i = 0; i < 26; i++){
	var idx = ans.indexOf(input[i]);
	if(arr[idx] == -1){
		arr[i] = i;
	}
	
}

for(var i = 0; i < str.length; i++){

}

console.log(arr.join(" "));


