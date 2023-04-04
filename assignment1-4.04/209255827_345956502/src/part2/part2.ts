import { pipe } from "ramda"
import { map } from "ramda"

//Question 1

export const countLetters = (str: string): Map<string, number> => {
  const letterCount = new Map<string, number>();
  const englishAlphabet = /[A-Za-z]/;
  str.split('').forEach(char => {
    if (englishAlphabet.test(char)) { 
      const charLowerCase = char.toLowerCase(); 
      letterCount.set(charLowerCase, (letterCount.get(charLowerCase) || 0) + 1);
    }
  });
  return letterCount;
};

const myString = 'A )(ba){n}an(a';
const LettersCount = countLetters(myString);
console.log(LettersCount);


//Question 2

export const isPaired = (str: string): boolean => {
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    const stack = [];
    let top = -1;

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        if (opening.indexOf(bracket) !== -1) {
            top++;
            stack[top] = bracket;
        }
        if (closing.indexOf(bracket) !== -1) {
            if (top === -1 || opening.indexOf(stack[top]) !== closing.indexOf(bracket)) {
                return false;
            }
            top--;
        }
    }
    return top === -1;
};

const IsPaired = isPaired(myString);
console.log(IsPaired);


//Question 3

export type WordTree = {
    root: string;
    children: WordTree[];
}    

export const treeToSentence = (tree: WordTree): string => {
    let output: string = tree.root;
    output += " "
    for (const child of tree.children) {
        output += treeToSentence(child);
    }
    return output;
}

const t1: WordTree = {
    root: "Hello",
    children: [
        {
        root: "students",
        children: [
            {
                root: "how",
                children: []
            }
        ]
        },
        {
            root: "are",
            children: []
        },
        {
            root: "you?",
            children: []
        },
    ]
}

console.log(treeToSentence(t1)); // ==> Hello students how are you?
