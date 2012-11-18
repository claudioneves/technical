define(["model/Validator", "model/Formatter"], function(Validator, Formatter){
	
	// Constructor
	function IndexController(){ 
		this._validator = new Validator();
		this._formatter = new Formatter();
	}
	
	IndexController.prototype = {			
			
			showSolution: function(input) {
				var input = new String(input);
				
				if(!this._validator.validateInput(input)){
					return "Input is not valid";
				}
				
				var formatInput = this._formatter.formatInput(input);
			}			
	};
	
	return IndexController;
	
});