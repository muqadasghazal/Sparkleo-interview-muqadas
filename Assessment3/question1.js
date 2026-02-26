let sum = 0;
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {  // Use < instead of <=
    sum += arr[i];
}

console.log(sum);  // Output: 6