import { pipe } from "ramda"
import { map } from "ramda"


/*
function sumEven(numbersAsString: string[]): number {
    let sum = 0
    for (let i = 0; i < numbersAsString.length; i++) {
        let num: number = parseInt(numbersAsString[i], 10)
        if (num % 2 == 0) {
            sum += num;
        }
    }
    return sum;
}
*/

const strNumbers: string[] = ["1", "2", "3", "4", "5", "6"];

const intNumbers: number[] = strNumbers.map((str) => parseInt(str, 10));

const evenNumbers = intNumbers.filter((num) => num % 2 === 0);

const sum = evenNumbers.reduce((acc, crr) => acc + crr, 0);

const sumEven = (numbersAsString: string[]): number => ;