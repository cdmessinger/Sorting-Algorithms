//I have to look at the answer key because I have no idea how to start this.
//Please in the future update your course with proper guidelines on how to solve this.
//Looking at the answer key there is no way I would be able to do this with the information provided so far in this course. I don't want to pay so much money to feel like an idiot.

function getDigit(num, i) {
     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
     if (num === 0) return 1;
     return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
     let maxDigits = 0;
     for (let i = 0; i < nums.length; i++) {
          maxDigits = Math.max(maxDigits, digitCount(nums[i]));
     }
     return maxDigits;
}

function radixSort(nums) {
     let maxDigitCount = mostDigits(nums);
     for (let k = 0; k < maxDigitCount; k++) {
          let digitBuckets = Array.from({ length: 10 }, () => []);
          for (let i = 0; i < nums.length; i++) {
               let num = nums[i];
               let digit = getDigit(num, k);
               digitBuckets[digit].push(num);
          }
          nums = [].concat(...digitBuckets);
     }
     return nums;
}

module.exports = radixSort;
