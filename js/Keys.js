var Keys = function(){
	var moveKeyList, keys = this;

	keys.setKeys = function(event, isPressed){
		var i, keyLength = keys.moveKeyList.length, currentKey;
		for(i = 0; i < keyLength; i++){
			currentKey = keys.moveKeyList[i];
			if(event.keyCode === currentKey.keyNum){
				currentKey.pressed = isPressed;
			}
		}
	};

	keys.getPressedKeys = function(){
		var i, keyLength = keys.moveKeyList.length, currentKey, keysPressed = [];
		for(i = 0; i < keyLength; i++){
			currentKey = keys.moveKeyList[i];
			if(currentKey.pressed){
				keysPressed.push(currentKey);
			}
		}
		return keysPressed;
	};

	(function(){
		keys.moveKeyList = [];
		keys.moveKeyList.push({direction: "Up", pressed: false, keyNum: 38});
		keys.moveKeyList.push({direction: "Down", pressed: false, keyNum: 40});
		keys.moveKeyList.push({direction: "Left", pressed: false, keyNum: 37});
		keys.moveKeyList.push({direction: "Right", pressed: false, keyNum: 39});
	})();
};