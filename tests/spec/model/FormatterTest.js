define(["model/Formatter", "../../helper/TestInput.js"], function (Formatter, TestInput) {
	
	var formatter = new Formatter();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/Formatter", { 
		setup: function () {
		},
		teardown: function () {
		}
	});
	
	QUnit.test("An input should return a formatted value", function(){
		var input = ' ';
		var value;
		
		var test = new Array({'input': 4, 'value': 4.0}, {'input': '001.41p', 'value': 1});
		
		console.log(test[1]['value']);
		
		
		strictEqual(false, formatter.formatInput(input), "An input should return a formatted value");
	});
	
	
	
	
	
});