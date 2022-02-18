/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

const isSorted = arr => arr[1] === undefined ? true : arr[0] > arr[1] ? false : arr[0] < arr[1] && isSorted(arr.slice(1));
// function isSorted(arr) {
//   if(arr[1] === undefined) return true;
//   if(arr[0] > arr[1]) return false;
//   // arr.pop();
//   return arr[0] < arr[1] && isSorted(arr.slice(1));
//   // return false;
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
