var five = require("johnny-five");
var board = new five.Board();
var message = process.argv[2];

var morse = require("./morse-code");

board.on("ready", function() {

	var speaker = morse(new five.Pin(6));
  	
	speaker(message, function(){
		process.exit(0);
	});

});