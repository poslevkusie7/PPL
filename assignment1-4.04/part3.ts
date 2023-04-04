import { pipe } from "ramda"
import { map } from "ramda"
import { Result, makeFailure, makeOk, bind, either } from "../lib/result";


//A
export const findResult = <T>(pred: (x: T) => boolean, array: T[]): Result<T> =>
    array.length === 0 ? makeFailure("No element found.") : pred(array[0]) ? makeOk(array[0]) : findResult(pred, array.shift() as T[])

//B
export const returnSquaredIfFoundEven_v2 = (array: number[]): Result<number> =>
    bind(findResult((x: number) => x % 2 === 0, array), ((x: number) => makeOk(x * x)))

//C
export const returnSquaredIfFoundEven_v3 = (array: number[]): number =>
    either(findResult((x: number) => x % 2 === 0, array), (x: number) => (x * x), (x: string) => -1)

