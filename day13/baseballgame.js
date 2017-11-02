var resultNum = Math.floor(Math.random()*10);
console.log(resultNum);


document.getElementById("delBtn").onclick = displayText;



function displayText() {
    document.getElementById("output").innerHTML = "click";
}

function myBtnClick(num) {

  
    document.getElementById("output").innerHTML = num;

}