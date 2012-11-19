define(function(){
	
	function Formatter() {}
	
	Formatter.prototype = {
		formatInput: function(input) {
		
			// If input is a single or double digit with or without trailing penny symbol
			if( (/^(\d+)(p?)$/).test(input) ) {
				input = input.replace(/p$/,'');				
				return Number(input);
			}
			
			// If input is any digit with or without a pound sign and with or without penny symbol
			if( (/^(£?)(\d+)(\.?)(\d*)(p?)$/).test(input) ) {
				input = input.replace(/^£/,'').replace(/p$/,'');
				input = Number(input);
				input = Math.round( input * Math.pow(10, 2) ) / Math.pow(10, 2);				
				return input * 100;
			}
		}
			
	};
	
	return Formatter;	
	
});