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

    exec() {
        var getLeaves = (root, leaves) => {
            if (isNumber(root)) {
                return;
            }
            if (root.isLeaf()) {
                leaves.push(root);
                return;
            }
            getLeaves(root.left, leaves);
            getLeaves(root.right, leaves);
        };

        if (!this.root) {
            return Promise.resolve(null);
        }

        if (isNumber(this.root)) {
            return Promise.resolve(this.root);
        }

        if (this.root.isLeaf()) {
            return this.root.exec();
        }
        var leaves = [];
        getLeaves(this.root, leaves);
        return Promise.all(leaves.map(node => node.exec()))
            .then(() => this.exec());
    }
}