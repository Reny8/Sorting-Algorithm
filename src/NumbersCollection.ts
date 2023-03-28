export class NumbersCollection {
  constructor(public data: number[]) {}
  length: number = this.data.length;

  swap(leftIndex: number, rightIndex: number): void {
    const placeHolder = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = placeHolder;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
