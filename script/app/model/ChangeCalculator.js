
define(function(){	
	function ChangeCalculator(){
	}
	
	ChangeCalculator.prototype = {
			'getChange': function(inputValue) {
				var change = new Object;
				var coins = new Array(200, 100, 50, 20, 2, 1);		    	
		    	for (var i = 0; i < coins.length; i++) {		    		
		    		var coin = coins[i];
		    		var numberOfCoins = Math.floor(inputValue/coin);		    		
		    		if(numberOfCoins > 0) {
		    			inputValue = inputValue % coin;
		    		}
		    		change[coin] = numberOfCoins;
		    	}		    	
		    	return change;
			}
	};
	
	return ChangeCalculator;
	
});