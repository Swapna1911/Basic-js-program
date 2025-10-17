let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
let greatest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > greatest) {
    greatest = arr[i];
  }
}

console.log("Greatest element is:", greatest);