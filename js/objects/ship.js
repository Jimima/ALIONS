var Ship = function(){
	var ship = this;
	ship.path = [];
	ship.shipPathLength = 0;
	ship.x = 100;
	ship.y = 100;
	ship.angle = 0;
	ship.forwardMomentum = 0;
	ship.angularMomentum = 0;

	ship.moveRight = function(){
		ship.angularMomentum = 0.4;
	};

	ship.moveLeft = function(){
		ship.angularMomentum = -0.4;
	};

	ship.moveUp = function(){
		ship.y -= 10;
	};

	ship.moveDown = function(){
		ship.y += 10;
	};

	ship.updatePosition = function(){
		ship.angle = ship.angle += ship.angularMomentum;
		ship.angularMomentum = ship.angularMomentum / 1.2;
	};

	ship.draw = function(context){
		var i, cos, sin;

		context.beginPath();
		context.lineWidth = 2;
		context.strokeStyle = "black";

		// draw ship lines
		for(i = 0; i < ship.shipPathLength; i++){
			sin = Math.sin(ship.angle);
			cos = Math.cos(ship.angle);
			var xnew = ship.path[i].x * cos - ship.path[i].y * sin;
			var ynew = ship.path[i].x * sin + ship.path[i].y * cos;
			context.lineTo(xnew + ship.x, ynew + ship.y);
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