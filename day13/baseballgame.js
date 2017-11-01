document.getElementById("delBtn").onclick = displayText;



function displayText() {
    document.getElementById("output").innerHTML = "click";
}

function myBtnClick() {

    var x = document.getElementById("sevenBtn").value;
    document.getElementById("output").innerHTML = x;

}