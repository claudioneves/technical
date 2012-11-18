define(function() {
	
	function TestInput() {
		this._validInputs = new Array(
				4, 
				85, 
				'197p', 
				'2p', 
				1.87, 
				'£1.23', 
				'£2', 
				'£10', 
				'£1.87p', 
				'£1p', 
				'£1.p', 
				'001.41p', 
				'4.235p', 
				'£1.257422457p'
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