import isNumber from 'lodash/isNumber'

export default class Execution {
    constructor() {
        this.op = null;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    setLeft(val) {
        if (val instanceof Execution) {
            val.next = this;
        }
        this.left = val;
    }

    setRight(val) {
        if (val instanceof Execution) {
            val.next = this;
        }
        this.right = val;
    }

    isLeaf() {
        return isNumber(this.left) && isNumber(this.right);
    }

    exec() {
        var calc = () => {
            switch (this.op) {
                case '*': return this.left * this.right;
                case '/': return this.left / this.right;
                case '+': return this.left + this.right;
                case '-': return this.left - this.right;
                default: throw "Unknown operator " + this.op;
            }
        };

        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(calc());
            }, 10);
        });
    }
}