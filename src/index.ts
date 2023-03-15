class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    // const len = this.collection.length
    // DESTRUCTED BELOW
    const { length } = this.collection;
    // BUBBLE SORT STRUCTURE
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftElement = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftElement;
        }
      }
    }
    console.log(this.collection);
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
