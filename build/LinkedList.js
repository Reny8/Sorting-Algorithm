"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LindedList = void 0;
class LindedList {
    constructor(data) {
        this.data = data;
        this.len = this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return true;
    }
    swap(leftIndex, rightIndex) { }
}
exports.LindedList = LindedList;
