define(["model/Validator", "../../helper/TestInput.js"], function (Validator, TestInput) {
	
	var validator = new Validator();
	
	var testInput = new TestInput();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/Validator", { 
		setup: function () {
		},
		teardown: function () {
		}
	});
	
	QUnit.test("An empty input should return validation false", function(){
		var input = ' ';
		strictEqual(false, validator.validateInput(input), "An empty input returns validation false");
	});
	
	QUnit.test("An invalid input should return validation false", function(){
		var invalidInputs = testInput.getInvalidInputs();
		var result = false;		
		for(var i = 0; i < invalidInputs.length; i++) {
			var input = invalidInputs[i];			
			if(true === validator.validateInput(input)) {
				//console.log(input);
				result = true;
				break;
			}
		}		
		
		strictEqual(false, result, "An invalid input returns validation false");
	});
	
	QUnit.test("A valid input should return validation true", function(){
		var validInputs = testInput.getValidInputs();
		var result = true;		
		for(var i = 0; i < validInputs.length; i++) {
			var input = validInputs[i]['input'];			
			if(false === validator.validateInput(input)) {
				//console.log(input);
				result = false;
				break;
			}
		}
		
		strictEqual(true, result, "A valid input returns validation true");
	});
});