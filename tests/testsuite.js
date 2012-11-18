(function () {
	
	// Defer Qunit in favour of RequireJS for module resolution
    QUnit.config.autostart = false;

    // Configure RequireJS so it resolves relative module paths from the app folder
    require.config({
        baseUrl: "../script/app",
    });

	// A list of all QUnit test Modules. Included as relative paths to skip baseUrl
	var testModules = [
		"spec/controller/IndexControllerTest.js",
		"spec/model/ValidatorTest.js",
		"spec/model/FormatterTest.js"
	];
	
    // Resolve testModules and start the Test Runner.
	require(testModules, QUnit.start);
}());