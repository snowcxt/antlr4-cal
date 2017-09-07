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

        this.queue = [];
        this.root = getRoot();
        if (!this.root) {
            return;
        }
    }
}