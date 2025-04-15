class FenwickTree {
    constructor(n) {
        this.tree = new Array(n + 1).fill(0); // 1-based index
    }

    update(i, delta) {
        while (i < this.tree.length) {
            this.tree[i] += delta;
            i += (i & -i); // move to next responsible node
        }
    }

    query(i) {
        let sum = 0;
        while (i > 0) {
            sum += this.tree[i];
            i -= (i & -i); // move to parent
        }
        return sum;
    }

    rangeSum(l, r) {
        return this.query(r) - this.query(l - 1);
    }
}
