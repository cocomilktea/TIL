var canvas = document.getElementById("ani");
var ctx = canvas.getContext("2d");
var bgImage = new Image();
var bgload = false;
bgImage.onload = function() {
	//ctx.drawImage(bgImage, 0, 0);
	bgload = true;
};
bgImage.src = "img/bg2.jpg";

//draw background images
var drawBackground = function(){
	ctx.drawImage(bgImage, 0, 0);
}


var ball = {
	x : 50,
	y : 50,
	dx : 0, //deltaX
	dy : 0, //deltaY
	radius : 10,
	color : "red",
	move : function(){
		this.x += this.dx;
		this.y += this.dy;
	},
	setSpeed : function(x, y){
		this.dx = x;
		this.dy = y;
	},
	check : function(){
		if(this.x == 0 || this.x == 640 ){
			this.dx = 0;
		}
		if(this.y == 0 || this.y == 360 ){
			this.dy = 0;
		}
	}
};


ctx.drawBall = function(){
	this.beginPath();
	this.fillStyle = ball.color;
	this.ellipse(ball.x, ball.y, ball.radius, ball.radius, 0, 0, 2 * Math.PI);
	this.fill();
}



//ctx.drawBall(50,50,10, "red");


ball.setSpeed(5, -1);
var drawAll = function(){
	if(bgload){
		drawBackground();
	}

	ball.check();
	ball.move();
	ctx.drawBall();


};


var x = setInterval(drawAll, 30);



