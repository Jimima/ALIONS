var App = function(config, canvas){
	var model, keys, app = this;

	app.canvas = canvas;

	app.resizeCanvas = function() {
		app.canvas.width = window.innerWidth;
		app.canvas.height = window.innerHeight;
	};

	app.keyDown = function(e){
		app.keys.setKeys(e, true);
	};

	app.keyUp = function(e){
		app.keys.setKeys(e, false);
	};

	app.draw = function(context){
		app.model.draw(context, app.canvas);
	};

	app.update = function(context){
		app.model.update(app.keys);
	};

	(function(){
		app.resizeCanvas();
		app.model = new Model();
		app.keys = new Keys();
	})();
};