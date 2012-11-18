define(["model/Formatter", "../../helper/TestInput.js"], function (Formatter, TestInput) {
	
	var formatter = new Formatter();
	
	var testInput = new TestInput();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/Formatter", { 
		setup: function () {
		},
		teardown: function () {
		}
	});
	
	QUnit.test("An input should return a formatted value", function(){
		var validInputs = testInput.getValidInputs();
		var result = true;
		
		for(var i = 0; i < validInputs.length; i++) {
			var input = new String(validInputs[i]['input']);			
			var expectedValue = validInputs[i]['value'];
			
			if(expectedValue !== formatter.formatInput(input)) {
				result = false;
				break;
			}
		}

		strictEqual(true, result, "An input should return a formatted value");
	});
});