var Model = function(){
	var playerShip, shipList = [], model = this;

	model.draw = function(context, canvas){
		context.clearRect(0, 0, canvas.width, canvas.height);
		var i, listLength;
		listLength = shipList.length;
		for(i = 0; i < listLength; i++){
			shipList[i].draw(context);
		}
		model.playerShip.draw(context);
	};

	model.update = function(keys){
		var i, currentKey, arrayLength = keys.moveKeyList.length;

		for(i = 0; i < arrayLength; i++){
			currentKey = keys.moveKeyList[i];
			if(currentKey.pressed){
				model.playerShip['move' + currentKey.direction]();
			}
		}

		model.playerShip.updatePosition();
	};

	(function(){
		//shipList.push(new Ship());
		model.playerShip = new Ship();
	})();
};