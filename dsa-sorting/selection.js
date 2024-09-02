function selectionSort(arr) {
     const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
     };
     for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
               if (arr[i] < arr[j]) {
                    continue;
               } else {
                    swap(arr, i, j);
               }
          }
     }
     return arr;
}

module.exports = selectionSort;
