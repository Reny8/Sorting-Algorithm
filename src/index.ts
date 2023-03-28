import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([2, 3, -5, 0]);
const stringCollection = new CharactersCollection("bddCCaaab");

// number sort
const numberSorter = new Sorter(numberCollection);
numberSorter.sort();
console.log(numberCollection.data);

// string sort
const stringSorter = new Sorter(stringCollection);
stringSorter.sort();
console.log(stringCollection.data);

// linkedlist sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const LinkedSorter = new Sorter(linkedList);
LinkedSorter.sort();
linkedList.print();
