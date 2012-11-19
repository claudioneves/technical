define(["vendor/mustache", "vendor/icanhaz"], function(Mustache, ich){
	
	function ErrorView(errorMessage) {
		this._errorMessage = errorMessage;
		this._template = ich.getTemplate('error');
	}
	
	ErrorView.prototype = {
			render: function() {					
					var view = {message: "The amount entered is invalid."};
					var renderedError = Mustache.render(this._template, view);
					$('#content').html(renderedError);
			}
	}
	
	return ErrorView;
	
});