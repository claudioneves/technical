define(function() {
	
	// Constructor
	function Validator() {
		this._validInputRegex = /^(£?)(\d+)(\.?)(\d*)[p]?$/;
	}
	
	Validator.prototype = {
		validateInput: function(input) {
			
			if( !(this._validInputRegex).test(input) ) {
				return false;
			} else {
				return true;
			}
		}	
	};
	
	return Validator;

		
});