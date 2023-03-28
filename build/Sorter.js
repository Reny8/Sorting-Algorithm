"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        // DESTRUCTED BELOW
        const { len } = this.collection;
        // BUBBLE SORT STRUCTURE
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        console.log(this.collection.data);
    }
}
exports.default = Sorter;
