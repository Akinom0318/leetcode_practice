class ProductOfNumbers {
    constructor() {
        this.stream = [];
    }
    add(num) {
        this.stream.push(num);
    }
    getProduct(k) {
        let product = 1;
        for (let i = this.stream.length - 1; i >= this.stream.length - k; i--) {
            product *= this.stream[i];
        }
        return product;
    }
}