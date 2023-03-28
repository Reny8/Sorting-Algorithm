import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  length: number = this.data.length;
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const placeHolder = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = placeHolder;
    this.data = characters.join("");
  }
}
