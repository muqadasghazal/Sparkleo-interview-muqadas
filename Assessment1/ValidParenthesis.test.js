const assert = require('assert');

// Function
function isValid(s) {
    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// ======================
// Test Cases
// ======================

// Example Test Case
assert.strictEqual(isValid("()[]{}"), true);

// Incorrect Matching
assert.strictEqual(isValid("(]"), false);

// Nested Brackets
assert.strictEqual(isValid("{[]}"), true);

// Empty String
assert.strictEqual(isValid(""), true);

console.log("✅ All tests passed!");