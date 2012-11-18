define(["controller/IndexController"], function (IndexController) {

	var controller = new IndexController();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("controller/IndexController", { 
		setup: function () {
		},
		teardown: function () {
		}
	});

	QUnit.test("An empty input should generate a 'empty input message'", function(){
		var input = ' ';
		strictEqual("Empty input is not valid", controller.showSolution(input), "An empty input returns validation false");
	});
	
	
});