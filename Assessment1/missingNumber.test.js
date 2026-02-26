// import built-in assert module
const assert = require('assert');

// =============================
// Function Implementation
// =============================
function findMissingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}

// =============================
// Test Cases
// =============================

// Test 1: Example Case
assert.strictEqual(
    findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]),
    9
);

// Test 2: Large Input Case
function generateLargeInput(n, missing) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        if (i !== missing) arr.push(i);
    }
    return arr;
}

const largeArray = generateLargeInput(100000, 54321);

assert.strictEqual(
    findMissingNumber(largeArray),
    54321
);

// Test 3: Unordered Input Case
assert.strictEqual(
    findMissingNumber([4, 0, 3, 1]),
    2
);

// Test 4: Boundary Case
assert.strictEqual(
    findMissingNumber([1]),
    0
);

console.log("✅ All tests passed!");