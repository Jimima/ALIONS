var Ship = function(){
	var ship = this;
	ship.path = [];
	ship.shipPathLength = 0;
	ship.x = 100;
	ship.y = 100;
	ship.forwardMomentum = 0;
	ship.angularMomentum = 0;

	ship.moveRight = function(){
		ship.x += 10;
	};

	ship.moveLeft = function(){
		ship.x -= 10;
	};

	ship.moveUp = function(){
		ship.y -= 10;
	};

	ship.moveDown = function(){
		ship.y += 10;
	};

	ship.updatePosition = function(){

	};

	ship.draw = function(context){
		var i;

		context.beginPath();
		context.lineWidth = 2;
		context.strokeStyle = "black";

		// draw ship lines
		for(i = 0; i < ship.shipPathLength; i++){
			context.lineTo(ship.path[i].x + ship.x, ship.path[i].y + ship.y);
		}
		context.closePath();
		context.stroke();
	};

	(function(){
		ship.path.push({x: 0, y: -50});
		ship.path.push({x: -30, y: 50});
		ship.path.push({x: 0, y: 30});
		ship.path.push({x: 30, y: 50});
		ship.shipPathLength = ship.path.length;
	})();
};