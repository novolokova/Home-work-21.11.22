// написати скрипт (можна функцію можна без),
//  який виводить індекс максимального елемента в масиві.
// Якщо максимальних елементів декілька(значення однакові)
//  - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];



// 1 варіант

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
  }

  for (let i = 0; i < array.length; i++) {
    if (maxIndex === array[i]) {
      arr.push(i);
      count++;
    }
  }
  return arr.pop();
}

console.log(maxIndex(arrNums));
console.log(count);







