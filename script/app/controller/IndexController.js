define(["model/Validator", "model/Formatter", "model/ChangeCalculator", "view/ChangeView", "view/ErrorView"], function(Validator, Formatter, ChangeCalculator, ChangeView, ErrorView){
	
	// Constructor
	function IndexController(){ 
		this._validator = new Validator();
		this._formatter = new Formatter();
		this._changeCalculator = new ChangeCalculator();
		this._view;
	}
	
	IndexController.prototype = {			
			showSolution: function(input) {
				var input = new String(input).replace(/^\s+|\s+$/g,'');
				var errorMessage = "";
				
				if(!this._validator.validateInput(input)){
					this._view = new ErrorView("Input is not valid");
				} else {
					var formattedInput = this._formatter.formatInput(input);
					var change = this._changeCalculator.getChange(formattedInput);
					this._view = new ChangeView(change);
				}
				this._view.render();
			}			
	};
	
	return IndexController;
	
});