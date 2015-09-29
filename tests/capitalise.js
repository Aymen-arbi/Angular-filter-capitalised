describe('The capitalise filter', function () {
	beforeEach(module('aymensCapitaliseFilter'));
	it('capitalise the first characters of the input word', function () {
		inject(function (capitaliseFilter) {
			expect(capitaliseFilter('hELlo')).toEqual('Hello ');
		});
	});
});