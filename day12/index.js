document.getElementById('main').innerHTML =  "Hello, js";
var btn = document.createElement("BUTTON");

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

for(var i = 1; i < 27; i++){
	var btn = document.createElement("BUTTON");
	btn.id = btn+i;
	btn.innerHTML = i;
	document.body.appendChild(btn);
};

