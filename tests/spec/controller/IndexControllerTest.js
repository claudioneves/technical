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
		controller.showSolution(" ");
		var view = controller.getView();
		equal(view.constructor, "ErrorView");		
		//strictEqual("Input is not valid", controller.showSolution(input), "An invalid input shows an 'invalid input' message");
	});
	
	QUnit.test("A valid input should generate a solution", function(){
		var input = "£1.257422457p";
		var solution = controller.showSolution(input);
		equal("object", typeof solution);
	});
	
	
});