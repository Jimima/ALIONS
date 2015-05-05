var canvas, context, app;

var gameLoop = function(){
	app.draw(context);
	app.update();
};

(function(){
	canvas = document.getElementById("canvas");

	app = new App({}, canvas);

	window.addEventListener('resize', app.resizeCanvas, false);

	document.addEventListener('keydown', app.keyDown, false);
	document.addEventListener('keyup', app.keyUp, false);

	context = canvas.getContext("2d");

	setInterval(gameLoop, 30);
})();