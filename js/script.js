var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;


drawSin();

function drawSin() {
		y = Math.sin(x);
	if (x >= 600){
		x = 0;
		y = y + 100;
	} else{
		x = x + 0.3;
	}
	ctx.fillStyle = "white";
	ctx.fillRect(20*x, 150+20*y, 2, 2);
	timer = setTimeout(drawSin, 50);
} 


