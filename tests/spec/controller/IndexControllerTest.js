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
		//strictEqual("Input is not valid", controller.showSolution(input), "An invalid input should provide an 'invalid input' message");
	});
	
	QUnit.test("A valid input should generate a solution", function(){
		//strictEqual("Input is valid", controller.showSolution(input), "An valid input should provide a change");
	});
	
	
});