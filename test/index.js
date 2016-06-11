'use strict';

const expect = require('expect.js');
const co = require('co');
const sleep = require('..');

describe('co-sleep', function() {
    it('should sleep for ms', co.wrap(function*() {
        const SLEEP_TIME = 1000;
        let before = Date.now();
        yield sleep(SLEEP_TIME);
        let after = Date.now() - before;
        expect(after).to.not.be.below(SLEEP_TIME);
    }));
});