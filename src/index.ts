import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// number sort
const numberCollection = new NumbersCollection([2, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

// string sort
const stringCollection = new CharactersCollection("bddCCaaab");
stringCollection.sort();
console.log(stringCollection.data);

// linkedlist sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
