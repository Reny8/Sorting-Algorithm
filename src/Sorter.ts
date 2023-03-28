import NumbersCollection from "./NumbersCollection";
export default class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
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
