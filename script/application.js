require.config({
    baseUrl: "script/app",
    paths: {
        vendor: '../vendor'
    }
});

define(["controller/IndexController", "jquery"], function(IndexController, $){
	var controller = new IndexController();
	$('input').keypress(
			function (e) {
				if( 13 == e.which ) {
					var input = $(this).val();
					controller.showSolution(input);
					e.preventDefault();
				}
			}
	);
});