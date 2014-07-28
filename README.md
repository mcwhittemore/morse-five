morse-five
==========

a morse code module for johnny-five. This is still a work in process.

## Example

```js
var five = require("johnny-five");
var board = new five.Board();
var message = "nodebots day";

var morse = require("./morse-code");

board.on("ready", function() {

	var speaker = morse(new five.Pin(6));
  	
	speaker(message, function(){
		process.exit(0);
	});

});
```

