function insertionSort(arr) {
     const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
     };
     for (let i = 1; i < arr.length; i++) {
          let n = i;
          while (n > 0 && arr[n - 1] > arr[n]) {
               swap(arr, n - 1, n);
               n--;
          }
     }
     return arr;
}

module.exports = insertionSort;
