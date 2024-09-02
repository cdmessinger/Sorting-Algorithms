/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
     const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
     };
     let pivot = arr[start]; // assume pivot is the first element
     let j = start; //the index for swapping

     for (let i = start + 1; i <= end; i++) {
          if (pivot > arr[i]) {
               j++;
               swap(arr, j, i);
          }
          console.log(arr);
     }
     // swap the pivot to where it should be
     swap(arr, start, j);
     return j;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
     if (left < right) {
          let pivIdx = pivot(arr, left, right);
          quickSort(arr, left, pivIdx - 1);
          quickSort(arr, pivIdx + 1, right);
     }
     return arr;
}

module.exports = quickSort;
