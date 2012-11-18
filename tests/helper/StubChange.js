define(function(){

	function StubChange(){
		this._stubChangeData = new Array(
				{'value': 1 , 'solution': {'200' : 0, '100' : 0, '50' : 0, '20' : 0, '2' : 0, '1' : 1}},
				{'value': 2 , 'solution': {'200' : 0, '100' : 0, '50' : 0, '20' : 0, '2' : 1, '1' : 0}},
				{'value': 5 , 'solution': {'200' : 0, '100' : 0, '50' : 0, '20' : 0, '2' : 2, '1' : 1}},
				{'value': 6 , 'solution': {'200' : 0, '100' : 0, '50' : 0, '20' : 0, '2' : 3, '1' : 0}},
				{'value': 20 , 'solution': {'200' : 0, '100' : 0, '50' : 0, '20' : 1, '2' : 0, '1' : 0}},
				{'value': 73 , 'solution': {'200' : 0, '100' : 0, '50' : 1, '20' : 1, '2' : 1, '1' : 1}},
				{'value': 300 , 'solution': {'200' : 1, '100' : 1, '50' : 0, '20' : 0, '2' : 0, '1' : 0}}
		);
	}
	
	StubChange.prototype = {
			'getStub': function(){
				return this._stubChangeData;
			}
	};
	
	return StubChange;
	
});