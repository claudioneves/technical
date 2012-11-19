define(function(){
	
	function Change(){
		this._coinsOf2Pounds;
		this._coinsOf1Pound;
		this._coinsOf50pence;
		this._coinsOf20pence;
		this._coinsOf2pence;
		this._coinsOf1pence;		
	}
	
	Change.prototype = {
			'addQuantity': function(denominationLabel, numberOfCoins) {
				if( typeof this["_coinsOf" + denominationLabel] != null ) {
					this["_coinsOf" + denominationLabel] = numberOfCoins;
				}
			},
			'getCoinsOf2Pounds': function() {
				return this._coinsOf2Pounds;
			},
			'getCoinsOf1Pound': function() {
				return this._coinsOf1Pound;
			},
			'getCoinsOf50pence': function() {
				return this._coinsOf50pence;
			},
			'getCoinsOf20pence': function() {
				return this._coinsOf20pence;
			},
			'getCoinsOf2pence': function() {
				return this._coinsOf2pence;
			},
			'getCoinsOf1pence': function() {
				return this._coinsOf1pence;
			}
	}
	
	return Change;
	
});