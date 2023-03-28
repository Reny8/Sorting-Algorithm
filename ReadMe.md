This is intended for learning purposes only. The is an example structure of using inheritance, abstract classes, classes and more. This sorting algorithm uses Bubble Sort.

Examples are included for sorting:

- LinkedList
- Strings
- An Array of numbers

To sort your desired item complete the following steps:

1. create a new ts file in the src folder
   - Example:
     - ClassName.ts
2. Inside the newly created file import the Sorter abstract class
   - Example;
     - import { Sorter } from "./Sorter";
3. Create a class that inherits from the Sorter class that was imported. Do not forget to export your class
   - Example:
     - export class ClassName extends Sorter {}
4. Inside this new class create a constructor function that takes in the data to be sorted and also calls the super function to use the sort function from the Sorter class
   - Example:
     - constructor(public data: type\* ) {
       super();
       }
     * the "type" keyword needs be replaced with the type of your item being passed in. For example of your item is a string, type will need to be changed to string
5. You class needs the following properties followed by the types:
   - length: this needs to be a number
   - compare(): this needs to be a function that takes in two numbers and returns a boolean
   - swap(): this needs to be a function that takes in two numbers and does not return anything
6. For the intended functionality needs to the sorting to work properly, review the following example files:
   - CharactersCollection.ts: used to sort a string
   - NumbersCollection.ts: used to sort a list of numbers
   - LinkedList.ts: used to sort a LinkedList structure
7. Once your functionality is completed for the following required items in your class, navigate to the index.ts file
8. Import your newly created class
   - Example:
     - import { ClassName } from "./ClassName"
9. Create a new value to call your new class
   - Array of Numbers Example:
     - const test = new ClassName([1,2,3])
10. To sort your items, call the sort(), which was inherited from the Sorter class. To see your results, print your data to the console using the name of the constructor value that was passed in when creating your class.
    - Array Example Sort:
      - test.sort()
      - console.log(test.data)

To run the code, in the terminal run the following commands:

1. Initially, run the following commands in the terminal (only needed once)
   - npm install concurrently
   - npm install nodemon
2. After the packages above are installed, run the following command in the terminal to run the code in the index.ts file
   - npm run start
