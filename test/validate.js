import assert from 'assert';
import { validate } from '../lib';

describe("validation", function () {
    it("empty", function () {
        assert.deepEqual([], validate(''));
    });

    it("simple", function () {
        assert.deepEqual([], validate('1+2'));
    });

    it("invalid chars", function () {
        assert.deepEqual([
            {
                "column": 1,
                "length": 1,
                "line": 0,
                "text": "token recognition error at: '_'"
            }, {
                "column": 2,
                "length": 1,
                "line": 0,
                "text": "token recognition error at: '_'"
            }, {
                "column": 3,
                "length": 1,
                "line": 0,
                "text": "extraneous input '2' expecting NEWLINE"
            }
        ], validate('1__2'));
    });
});