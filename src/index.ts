import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

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
