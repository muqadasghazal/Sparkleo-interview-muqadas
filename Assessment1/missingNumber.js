// find missing numbers 
function findMissingNumber(nums) {
    // example array [0, 1, 2, 4] - missing number is 3
    const n = nums.length;

    // Expected sum of above array is 0 + 1 + 2 + 3 + 4 = 10
    const expectedSum = (n * (n + 1)) / 2;

    // Actual sum of array is 0 + 1 + 2 + 4 = 7
    let actualSum = 0;
    // calculate actual sum of array
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    // return expected sum which is 3
    return expectedSum - actualSum;
}

// example usage
const nums = [4, 1, 2, 2, 4];
const missingNumber = findMissingNumber(nums);
console.log(`The missing number is: ${missingNumber}`); // Output: The missing number is: 3