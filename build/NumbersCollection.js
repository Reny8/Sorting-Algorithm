"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumbersCollection {
    constructor(data) {
        this.data = data;
        this.len = this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const placeHolder = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = placeHolder;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}
exports.default = NumbersCollection;
