function merge(arr1, arr2) {
     const mergedArray = [];
     let i = 0;
     let j = 0;
     while (i < arr1.length && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
               mergedArray.push(arr1[i]);
               i++;
          } else {
               mergedArray.push(arr2[j]);
               j++;
          }
     }
     while (i < arr1.length) {
          mergedArray.push(arr1[i]);
          i++;
     }
     while (j < arr2.length) {
          mergedArray.push(arr2[j]);
          j++;
     }
     return mergedArray;
}

function mergeSort(arr) {
     if (arr.length <= 1) return arr;
     const half = arr.length / 2;
     const leftHalf = mergeSort(arr.slice(0, half));
     const rightHalf = mergeSort(arr.slice(half));
     return merge(leftHalf, rightHalf);
}

module.exports = { merge, mergeSort };
