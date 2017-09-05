import assert from 'assert';
import { run } from '../dist';

describe("arithmetic", function () {
    it("simple", function () {
        assert.equal(3, run('1+2;'));
    });
    it("multiple & sum", function () {
        assert.equal(7, run('1+2*3;'));
    });
    it("paren & multiple & sum", function () {
        assert.equal(9, run('(1+2)*3;'));
    });
    it("paren x 2 & multiple & sum", function () {
        assert.equal(27, run('(1+2 * (9-5))*3;'));
    });
});

describe("assign", function () {
    it("1 variable", function () {
        assert.equal(1, run('a=1;a;'));
    });
    it("2 variables", function () {
        assert.equal(-1, run('a=1;b=2;a-b;'));
    });
    it("nested variables", function () {
        assert.equal(12, run('a=1;b=2;c=a+b;d=c-(a*b);(c+d)*3;'));
    });
});