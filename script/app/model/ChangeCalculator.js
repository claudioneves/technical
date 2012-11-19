define(["model/Denomination", "model/Change"], function(Denomination, Change){
	
	// Constructor
	function ChangeCalculator(){
		this._change = new Change();
		this._denomination = new Denomination();
	}
	
	ChangeCalculator.prototype = {
			// Calculates change and returns a Change object
			getChange: function(inputValue) {
				var change = new Object;
				var denominations = this._denomination.getDenominations();
		    	for (var i = 0; i < denominations.length; i++) {		    		
		    		var denominationLabel = denominations[i]['label'];
		    		var denominationValue = denominations[i]['value'];
		    		var numberOfCoins = Math.floor(inputValue/denominationValue);		    		
		    		if(numberOfCoins > 0) {
		    			inputValue = inputValue % denominationValue;
		    		}
		    		this._change.addQuantity(denominationLabel, numberOfCoins);
		    	}		    	
		    	return this._change;
			}
	};
	
	return ChangeCalculator;
	
});