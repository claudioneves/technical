define(function(){
	
	function Denomination() {
		this._denominations = new Array(
				{'label': '2Pounds', 'value': 200},
				{'label': '1Pound', 'value': 100},
				{'label': '50pence', 'value': 50},
				{'label': '20pence', 'value': 20},
				{'label': '2pence', 'value': 2},
				{'label': '1pence', 'value': 1}				
		);
	}
	
	Denomination.prototype = {
			getDenominations: function() {
				return this._denominations;
			}
	}
	
	return Denomination;
	
});