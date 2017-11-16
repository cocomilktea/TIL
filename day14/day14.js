/*

//일반함수 카운트다운
var countdown = function(n){
	for(var i = n; i > 0; i--){
		console.log(i);
	};
};
countdown(10);

//재귀함수는 꼭 종료조건을 넣어줘야 한다!
var countdown2 = function(n){
	console.log(n);
	countdown2(n - 1); //종료조건이 없으면 무한반복
};
countdown2(10);


//재귀함수 카운트다운 내코드 
var countdown2 = function(n){
	console.log(n);

	if(n > 0){
		return countdown2(n - 1);
	}
};
countdown2(10);

//재귀함수 카운트다운 더 좋은 코드
var countdown2 = function(n){	

	if(n < 0){
		return;
	}
	console.log(n);
	countdown2(n - 1);
};
countdown2(10);




// var rsum = function(a, b){
// 	var result = 0;
// 	for (var i = a; i <= b; i++){
// 		result += i;
// 	};
// 	return result;
// };
// var x = rsum(1,100);
// console.log(x); //5050


//재귀함수로 풀기 
var rsum = function(a, b){
	if(a == b){
		return a;
	}
	return b + rsum(a , b - 1);
};
var x = rsum(1,100);
console.log(x); //5050



//재귀로 팩토리얼 구현
var str = "";
var fact = function(n){
	if(n == 1){
		str += 1;
		return 1;
	}
	str += n + " * ";
	console.log(str);
	return n * fact(n - 1);
};
var y = fact(5); //5*4*3*2*1 120
console.log("%s = %d", str, y);




//피보나치 수열


*/






