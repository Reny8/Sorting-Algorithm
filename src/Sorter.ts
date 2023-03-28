export abstract class Sorter {
  abstract length: number;
  abstract compare(leftItem: number, rightItem: number): boolean;
  abstract swap(leftItem: number, rightItem: number): void;
  sort(): void {
    // DESTRUCTED BELOW
    const { length } = this;
    // BUBBLE SORT STRUCTURE
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
