function isValid(s) {
    // Stack to keep track of opening brackets
    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If opening bracket, push to stack, (
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }

        // If closing bracket like ")"
        else {
            // stack empty OR mismatch
            // pops "(" from stack !== ")" in map
            // once the parenthesis is popped out from stack, it is compared with the corresponding opening bracket in the map. If they do not match, it means that the parentheses are not properly nested or matched, and the function returns false.
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // If stack empty → valid
    return stack.length === 0;
}
let valid = isValid("({)[}]"); // Example input
console.log(valid); // Output: true