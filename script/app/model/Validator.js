define(function() {
	
	function Validator() {}
	
	Validator.prototype = {
		validateInput: function(input) {

			if( (/^\s*$/).test(input) ) {
				return false;	
			} else {
				return true;
			}
		}	
	};
	
	return Validator;

		
});