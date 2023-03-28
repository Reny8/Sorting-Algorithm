"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([2, 3, -5, 0]);
const stringCollection = new CharactersCollection_1.CharactersCollection("bddCCaaab");
// number sort
const numberSorter = new Sorter_1.Sorter(numberCollection);
numberSorter.sort();
console.log(numberCollection.data);
// string sort
const stringSorter = new Sorter_1.Sorter(stringCollection);
stringSorter.sort();
console.log(stringCollection.data);
