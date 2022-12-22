export function merge(collection1: number[], collection2: number[]): number[] {
  var results = collection1.concat(collection2)

  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results.length - i - 1; j++) {
      if (results[j] > results[j + 1]) {
        [results[j], results[j + 1]] = [results[j + 1], results[j]];
      }
    }
  }

  return results
}

const array1 = [1, 3, 5, 7];
const array2 = [15,2,4,5,6,7];

console.log(merge([0,1,3,2,4],[2,3,4,5,0]));
