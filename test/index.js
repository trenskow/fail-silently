'use strict';

const
	{ expect } = require('chai');

require('chai').use(require('chai-as-promised'));

const
	failSilently = require('../');

describe('fail-silently', () => {

	it('should come back with result', () => {
		expect(failSilently(() => 'Hello, World!')()).to.equal('Hello, World!');
	});

	it ('should come back with undefined if error is thrown.', () => {
		expect(failSilently(() => { throw new Error('This is an Error'); })()).to.be.undefined;
	});

	it ('should come back with value if function is async.', async () => {
		return expect(failSilently(async () => 'Hello, World!')()).to.eventually.equal('Hello, World!');
	});

	it ('should come back with undefined if error is thrown in async function.', async () => {
		return expect(failSilently(async () => { throw new Error('This is an Error'); })()).to.eventually.be.undefined;
	});

});
