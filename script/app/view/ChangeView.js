define(["vendor/mustache", "vendor/icanhaz"], function(Mustache, ich){
	
	function ChangeView(change){
		this._change = change;
		this._template = ich.getTemplate('change');
	}
	
	ChangeView.prototype = {
			'render': function() {
				
				var view = {
						coinsOf2Pounds: this._change.getCoinsOf2Pounds(),
						coinsOf1Pound: this._change.getCoinsOf1Pound(),
						coinsOf50pence: this._change.getCoinsOf50pence(),
						coinsOf20pence: this._change.getCoinsOf20pence(),
						coinsOf2pence: this._change.getCoinsOf2pence(),
						coinsOf1pence: this._change.getCoinsOf1pence()
				};
				var renderedChange = Mustache.render(this._template, view);
				$('#content').html(renderedChange);				
			}
	}
	
	return ChangeView;
	
	
});