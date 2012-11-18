define(["model/Validator", "model/Formatter", "model/ChangeCalculator"], function(Validator, Formatter, ChangeCalculator){
	
	// Constructor
	function IndexController(){ 
		this._validator = new Validator();
		this._formatter = new Formatter();
		this._changeCalculator = new ChangeCalculator();
	}
	
	IndexController.prototype = {			
			
			showSolution: function(input) {
				var input = new String(input).replace(/^\s+|\s+$/g,'');
				
				if(!this._validator.validateInput(input)){
					return "Input is not valid";
				}				
				var formattedInput = this._formatter.formatInput(input);
				var solution = this._changeCalculator.getChange(formattedInput);
			}			
	};
	
	return IndexController;
	
});