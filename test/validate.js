import assert from 'assert';
import { validate } from '../lib';

describe("validation", function () {
    it("empty", function () {
        assert.deepEqual([], validate(''));
    });

    it("simple", function () {
        assert.deepEqual([], validate('1+2'));
    });
});