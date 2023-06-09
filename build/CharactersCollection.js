"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.length = this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        const placeHolder = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = placeHolder;
        this.data = characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
