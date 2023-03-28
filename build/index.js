"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// number sort
const numberCollection = new NumbersCollection_1.NumbersCollection([2, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);
// string sort
const stringCollection = new CharactersCollection_1.CharactersCollection("bddCCaaab");
stringCollection.sort();
console.log(stringCollection.data);
// linkedlist sort
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
