var Ship = function(){
	var ship = this;
	ship.path = [];
	ship.shipPathLength = 0;
	ship.x = 100;
	ship.y = 100;
	ship.angle = 0;
	ship.xvelocity = 0;
	ship.yvelocity = 0;
	ship.angularMomentum = 0;
	ship.accelRate = 5;

	ship.angleAsDegrees = function(extraAngle){
		return (ship.angle + (extraAngle ? extraAngle : 0))* Math.PI / 180;
	};

	ship.moveRight = function(){
		ship.angularMomentum = 10;
	};

	ship.moveLeft = function(){
		ship.angularMomentum = -10;
	};

	ship.moveUp = function(){
		ship.xvelocity += Math.cos(ship.angleAsDegrees()) * ship.accelRate;
		ship.yvelocity += Math.sin(ship.angleAsDegrees()) * ship.accelRate;
	};

	ship.moveDown = function(){
		ship.xvelocity -= Math.cos(ship.angleAsDegrees()) * ship.accelRate;
		ship.yvelocity -= Math.sin(ship.angleAsDegrees()) * ship.accelRate;
	};

	ship.moveA = function(){
		ship.xvelocity += Math.cos(ship.angleAsDegrees(-90)) * ship.accelRate;
		ship.yvelocity += Math.sin(ship.angleAsDegrees(-90)) * ship.accelRate;
	};

	ship.moveS = function(){
		ship.xvelocity += Math.cos(ship.angleAsDegrees(90)) * ship.accelRate;
		ship.yvelocity += Math.sin(ship.angleAsDegrees(90)) * ship.accelRate;
	};

	ship.updatePosition = function(){
		ship.angle = ship.angle += ship.angularMomentum;
		ship.angularMomentum = ship.angularMomentum / 1.2;
		ship.x += ship.xvelocity;
		ship.y += ship.yvelocity;
		ship.xvelocity = ship.xvelocity / 1.05;
		ship.yvelocity = ship.yvelocity / 1.05;
	};

	ship.draw = function(context){
		var i, cos, sin, xnew, ynew;

		context.beginPath();
		context.lineWidth = 2;
		context.strokeStyle = "black";

		sin = Math.sin(ship.angle * Math.PI / 180);
		cos = Math.cos(ship.angle * Math.PI / 180);

		// draw ship lines
		for(i = 0; i < ship.shipPathLength; i++){
			xnew = ship.path[i].x * cos - ship.path[i].y * sin;
			ynew = ship.path[i].x * sin + ship.path[i].y * cos;
			context.lineTo(xnew + ship.x, ynew + ship.y);
		}
		context.closePath();
		context.stroke();
	};

	(function(){
		var cos, sin, xnew, ynew, i;
		ship.path.push({x: 0, y: -50});
		ship.path.push({x: -30, y: 50});
		ship.path.push({x: 0, y: 30});
		ship.path.push({x: 30, y: 50});
		cos = Math.cos(90 * Math.PI / 180);
		sin = Math.sin(90 * Math.PI / 180);
		ship.shipPathLength = ship.path.length;
		for(i = 0; i < ship.shipPathLength; i++){
			xnew = ship.path[i].x * cos - ship.path[i].y * sin;
			ynew = ship.path[i].x * sin + ship.path[i].y * cos;
			ship.path[i].x = xnew;
			ship.path[i].y = ynew;
		}
	})();
};