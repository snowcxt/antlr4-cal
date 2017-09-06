import assert from 'assert';
import { run } from '../lib';

describe("arithmetic", function () {
    it("simple", function () {
        assert.equal(3, run('1+2'));
    });
    it("multiple & sum", function () {
        assert.equal(7, run('1+2*3'));
    });
    it("paren & multiple & sum", function () {
        assert.equal(9, run('(1+2)*3'));
    });
    it("paren x 2 & multiple & sum", function () {
        assert.equal(27, run('(1+2 * (9-5))*3'));
    });
});

describe("assign", function () {
    it("1 variable", function () {
        assert.equal(1, run('a=1\na'));
    });
    it("2 variables", function () {
        assert.equal(-1, run('a=1\nb=2\na-b'));
    });
    it("nested variables", function () {
        assert.equal(12, run('a=1\nb=2\nc=a+b\nd=c-(a*b)\n(c+d)*3'));
    });
});