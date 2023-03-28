interface Sortable {
  length: number;
  compare(leftItem: number, rightItem: number): boolean;
  swap(leftItem: number, rightItem: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    // DESTRUCTED BELOW
    const { length } = this.collection;
    // BUBBLE SORT STRUCTURE
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
