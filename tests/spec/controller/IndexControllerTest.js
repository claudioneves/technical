define(["controller/IndexController"], function (IndexController) {

	var controller = new IndexController();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("controller/IndexController", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("An invalid input should generate an 'invalid input message'", function(){
		var input = ' ';
		strictEqual("Input is not valid", controller.showSolution(input), "An invalid input shows an 'invalid input' message");
	});
	
	
});