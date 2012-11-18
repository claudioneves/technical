define(["model/Validator"], function(Validator){
	
	// Constructor
	function IndexController(){ 
		this._validator = new Validator();
	}
	
	IndexController.prototype = {			
			
			showSolution: function(input) {
				if(!this._validator.validateInput(input)){
					return "Input is not valid";
				}
			}			
	};
	
	return IndexController;
	
});