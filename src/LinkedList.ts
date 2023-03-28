export class LindedList {
  constructor(public data: string) {}
  len: number = this.data.length;
  compare(leftIndex: number, rightIndex: number): boolean {
    return true;
  }
  swap(leftIndex: number, rightIndex: number): void {}
}
