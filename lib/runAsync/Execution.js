import isNumber from 'lodash/isNumber'

export default class Execution {
    constructor() {
        this.op = null;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    setLeft(val) {
        if (val instanceof Execution) {
            val.parent = this;
        }
        this.left = val;
    }

    setRight(val) {
        if (val instanceof Execution) {
            val.parent = this;
        }
        this.right = val;
    }

    isLeaf() {
        return isNumber(this.left) && isNumber(this.right);
    }

    exec() {
        var calc = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    switch (this.op) {
                        case '*': resolve(this.left * this.right); break;
                        case '/': resolve(this.left / this.right); break;
                        case '+': resolve(this.left + this.right); break;
                        case '-': resolve(this.left - this.right); break;
                        default: throw "Unknown operator " + this.op;
                    }
                }, 10);
            });
        }

        return calc()
            .then((val) => {
                if (this.parent) {
                    if (this.parent.left === this) {
                        this.parent.left = val;
                    } else if (this.parent.right === this) {
                        this.parent.right = val;
                    }
                }
                return new Promise(resolve => resolve(val));
            });
    }
}