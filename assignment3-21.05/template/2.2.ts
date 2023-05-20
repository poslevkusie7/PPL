export const time = <T>(expr: () => T): [T, number] => {
    const startTime = performance.now();
    const value = expr();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return [value, executionTime];
};
  
export const exampleFunction = (): void => {
    console.log("Executing example function");
    for (let i = 0; i < 1000000; i++) {
         Math.sqrt(i);
    }
};
  
export const [result, elapsedTime] = time(() => exampleFunction());

console.log(result);          // Print the value
console.log(elapsedTime);     // Print the execution time in milliseconds
  