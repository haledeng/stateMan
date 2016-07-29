var State = (function(){

	function createStore(reducer, initState) {
		var currentState;
		if (typeof initState != 'undefined') {
			currentState = initState;
		}
		var listeners = [];
		return {
			dispatch: function(action) {
				currentState = reducer(currentState, action);
				for (var i = 0; i < listeners.length; i++) {
					listeners[i]();
				};
			},
			subscribe: function(fn) {
				listeners.push(fn);
			},
			getState: function() {
				return currentState;
			}
		}

	}
	return {
		createStore: createStore
	}
})();