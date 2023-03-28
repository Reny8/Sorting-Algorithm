interface Sortable {
  len: number;
  compare(leftItem: number, rightItem: number): boolean;
  swap(leftItem: number, rightItem: number): void;
}
export class Sorter {
  constructor(public collection: Sortable) {}

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
  }
}
