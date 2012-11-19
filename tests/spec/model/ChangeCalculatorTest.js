define(["model/ChangeCalculator", "../../helper/StubChange.js"], function(ChangeCalculator, StubChange){
	
	var changeCalculator = new ChangeCalculator();	
	var stubChange = new StubChange();
	
	// Define the QUnit module and lifecycle.
	QUnit.module("model/ChangeCalculator", { 
		setup: function () {
		},
		teardown: function () {
		}
	});
	
	QUnit.test("A correct change with minimum number of coins should be given", function() {
		var stubChangeData = stubChange.getStub();
		for(var i = 0; i < stubChangeData.length; i++) {
			var value = stubChangeData[i]['value'];			
			var solution = stubChangeData[i]['solution'];
			
			var change = changeCalculator.getChange(value);
			
			equal(solution['200'],	change.getCoinsOf2Pounds(),	'Number of 2 pound coins should be correct');
			equal(solution['100'],	change.getCoinsOf1Pound(),	'Number of 1 pound coins should be correct');
			equal(solution['50'],	change.getCoinsOf50pence(),	'Number of 50p coins should be correct');
			equal(solution['20'],	change.getCoinsOf20pence(),	'Number of 20p coins should be correct');
			equal(solution['2'],	change.getCoinsOf2pence(),	'Number of 2p coins should be correct');
			equal(solution['1'],	change.getCoinsOf1pence(),	'Number of 1p coins should be correct');
		}
	});
	
});