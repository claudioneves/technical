define(function() {
		
	// All values in pence
	function TestInput() {
		this._validInputs = new Array(
				{'input': 4, 'value': 4},
				{'input': 85, 'value': 85},
				{'input': '197p', 'value': 197},
				{'input': '2p', 'value': 2},
				{'input': 1.87, 'value': 187}, 
				{'input': '£1.23', 'value': 123}, 
				{'input': '£2', 'value': 200}, 
				{'input': '£10', 'value': 1000}, 
				{'input': '£1.87p', 'value': 187}, 
				{'input': '£1p', 'value': 100}, 
				{'input': '£1.p', 'value': 100}, 
				{'input': '001.41p', 'value': 141}, 
				{'input': '4.235p', 'value': 424}, 
				{'input': '£1.257422457p', 'value': 126},
				{'input': '£333', 'value': 33300}
				);
		
		this._invalidInputs = new Array(
				' ', 
				'1x', 
				'£1x.0p', 
				'£p'
				);		
	}
	
	TestInput.prototype = {
			'getValidInputs': function() {
				return this._validInputs;
			},
			'getInvalidInputs': function() {
				return this._invalidInputs;
			}
	};	
	
	return TestInput;

});