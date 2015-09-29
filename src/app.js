angular.module('aymensCapitalise', [])
	.filter('capitalise', function () {
		return function (input) {
			var words = input.split(/-| /),
				capitalised = '';

			for (var i = 0; i < words.length; i++) {

				capitalised = capitalised + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
			}
			return capitalised;
		};
	});