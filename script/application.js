require.config({
    baseUrl: "script/app",
    paths: {
        vendor: '../vendor'
    }
});

// Entry point of application
define(["controller/IndexController", "jquery"], function(IndexController, $){
	
	$(document).ready(function() {
		$('#main').append('<div id="content"></div>');
		
		var controller = new IndexController();

		$('input').keypress(
				function (e) {
					if( 13 == e.which ) {
						var input = $(this).val();
						controller.showSolution(input);
						e.preventDefault();
						return false;
					}
				}
		);
		
	});	
});