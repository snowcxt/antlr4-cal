import isNumber from 'lodash/isNumber'
import Execution from './Execution';

export default class ExecutionTree {
    constructor(results) {
        var getRoot = () => {
            while (results.length > 0) {
                var val = results.pop();
                if (val instanceof Execution || isNumber(val)) {
                    return val
                }
            }
            return null;
        }

        this.root = getRoot();
    }

    exec(queue) {
        var leaves = [];
        if (!this.root) {
            return Promise.resolve(null);
        }

        if (isNumber(this.root)) {
            return Promise.resolve(this.root);
        }

        if (this.root.isLeaf()) {
            return this.root.exec(leaves);
        }

        return Promise.all(queue.map(node => node.exec(leaves)))
            .then(() => this.exec(leaves));
    }
}