define(function() {
	
	function TestInput() {
		this._validInputs = new Array(
				{'input': 4, 'value': 4}, 
				{'input': 85, 'value': 85}, 
				{'input': '197p', 'value': 0}, 
				{'input': '2p', 'value': 0}, 
				{'input': 1.87, 'value': 0}, 
				{'input': '£1.23', 'value': 0}, 
				{'input': '£2', 'value': 0}, 
				{'input': '£10', 'value': 0}, 
				{'input': '£1.87p', 'value': 0}, 
				{'input': '£1p', 'value': 0}, 
				{'input': '£1.p', 'value': 0}, 
				{'input': '001.41p', 'value': 0}, 
				{'input': '4.235p', 'value': 0}, 
				{'input': '£1.257422457p', 'value': 0}
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