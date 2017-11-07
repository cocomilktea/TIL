//숫자 5개 정렬

var numArr = [1, 3, 9, 2 ,7 ,11];
//내림차순
numArr.sort(function(a, b){
	return a - b;
});
console.log(numArr);
//오름차순 arrow function
numArr.sort((a,b) => (b-a)); 
console.log(numArr);


//단어 5개 정렬
var strArr = ["apple", "mango", "banana", "watermelon", "orange"];
console.log(strArr.sort());


//사람 객체 (name, money)를 5개 만들어서 이름과 재산순으로 각각 정렬
var person = [{name : 'a', money : 1},{name : 'b', money : 20},{name : 'c', money : 50},{name : 'd', money : 10},{name : 'e', money : 70},{name : 'f', money : 60} ];

var compare = function(a, b){
	if(a.name > b.name){
		return 1; 
	}else if(a.name === b.name){
		return 0;
	}else{
		return;
	}
};

console.log(person);


			
// person.sort((a,b) => (a.money - b.money));
// console.log(person);
// person.sort((a,b) => (b.money - a.money));
// console.log(person);


//셔플 구현
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.shuffle = function(){

	for(var i = 0; i < this.length * 100; i++){
		var idx1 = Math.floor(Math.random() * this.length);
		var idx2 = Math.floor(Math.random() * this.length);
		var temp = this[idx1];
		this[idx1] = this[idx2];
		this[idx2] = temp;
	}
}
arr.shuffle();
console.log(arr);

//좋은 셔플 알고리즘
Array.prototype.shuffle2 = function(){
	for(var i = this.length -1; i >= 0; i--){
		var idx1 = Math.floor(Math.random() * i);
		var temp = this[idx1];
		this[idx1] = this[i];
		this[i] = temp;
	}
}

arr.shuffle2();
console.log(arr);



//제일 쉬운 정렬 배열에서 남은 수 중 가장 작은 수를 앞부터 채워준다

function selectionSort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		var min = arr[i];
		var pos = i
		for(var j = i + 1; j < arr.length; j++){
			if(arr[j] < min){
				min = arr[j];
				pos = j;
			}
		}
		arr[pos] = arr[pos];
		arr[i] = min;
	}
}
selectionSort(arr);
console.log(arr);








