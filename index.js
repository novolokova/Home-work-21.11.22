// написати скрипт (можна функцію можна без),
//  який виводить індекс максимального елемента в масиві.
// Якщо максимальних елементів декілька(значення однакові)
//  - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function maxIndex(array) {
  if (array.length === 0) {
    return -1;
  }

  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

console.log(maxIndex(arrNums));

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function maxIndexNumElements(array) {
  let count = 0;
  let maxIndex = 0;

  if (array.length === 0) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[maxIndex]) {
      maxIndex = i;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[maxIndex]) {
      count++;
    }
  }
  
  const result = {};
  result.maxIndex = maxIndex;
  result.count = count;

  return result;
}

console.log(maxIndexNumElements(arrNums));
