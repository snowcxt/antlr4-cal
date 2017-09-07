export default class Execution {
    constructor() {
        this.value = null;
        this.op = null;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    setLeft(left) {
        this.left = left;
    }

    setRight(right) {
        this.right = right;
    }

    setValue(value) {
        if (value.value !== undefined) {
            this.value = value.value;
        } else {
            this.value = value;
        }
    }
}