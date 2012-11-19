define(["model/Validator", "model/Formatter", "model/ChangeCalculator", "view/ChangeView", "view/ErrorView"], function(Validator, Formatter, ChangeCalculator, ChangeView, ErrorView){
	
	// Constructor
	function IndexController(){ 
		this._validator = new Validator();
		this._formatter = new Formatter();
		this._changeCalculator = new ChangeCalculator();
		this._view;
	}
	
	IndexController.prototype = {			
			// Processes input and initialises view
			showSolution: function(input) {
				var input = new String(input).replace(/^\s+|\s+$/g,'');
				
				if(!this._validator.validateInput(input)){
					this._view = new ErrorView("Input is not valid");
				} else {
					var formattedInput = this._formatter.formatInput(input);
					var change = this._changeCalculator.getChange(formattedInput);
					this._view = new ChangeView(change);
				}
				this._view.render();
			},
			getView: function() {
				return this._view;
			}
	};
	
	return IndexController;
	
});