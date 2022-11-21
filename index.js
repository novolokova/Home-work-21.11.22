// написати скрипт (можна функцію можна без),
//  який виводить індекс максимального елемента в масиві.
// Якщо максимальних елементів декілька(значення однакові)
//  - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

const arrNums = [555, 9, 5, 9, 5, 5, 6, 7, 5, 19, 62];

// first option ***************************

let count = 0;
/**
 *
 * @param {Object []} array
 * @returns {number}
 */
function maxIndex(array) {
  if (array.length === 0) {
    return -1;
  }
  let firstIndex = array[0];
  let maxIndex;
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstIndex) {
      maxIndex = array[i];
      firstIndex = array[i];
    }
    maxIndex = firstIndex;
  }

  for (let i = 0; i < array.length; i++) {
    if (maxIndex === array[i]) {
      arr.push(i);
      count++;
    }
  }
  const lastMaxIndex = arr.pop();
  return lastMaxIndex;
}

console.log(maxIndex(arrNums));
console.log(count);

// second option  ************************

let count1 = 0;
function maxElement(array) {
  if (array.length === 0) {
    return -1;
  }
  const maxElement = array.indexOf(Math.max.apply(null, array));
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[maxElement] === array[i]) {
      arr.push(i);
      count1++;
    }
  }
  return arr.pop();
}

console.log(maxElement(arrNums));
console.log(count1);
