//숫자퍼즐 구현
//1. html +  js만들기
//<div id="puzzle"><span id="n00"></span></div>
//<div><span id ="n10"></span>
//2. css span을 적당히 키우기
//3. js구현
//버튼 이벤트 리스너 추가 
//어떤 span이 눌렸는지 체크
//움직일 수 있다면 스왑 
//반복
//섞기 (무작위 스왑을 여러번 수행)
//움직인 횟수체크 (스왑한 카운트)
//다 정리했으면 성공! 메시지 출력

var puzzle = document.getElementById('puzzle');

//var arr = [];
function numClick(event){
	//arr.push(event.target);
	console.log(event.target);
	//console.log(arr);

	if(!event.target.id){
		console.log("outside");
		return;
	}

	// if(event.value == "x"){
	// 	console.log("엑스");
	// }
}


