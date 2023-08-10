function reverseBubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const numbers = [5, 7, 22, 150, 53, 98, 62, 2569, 1000, 1];
console.log("Original Array:", numbers);

reverseBubbleSort(numbers);
console.log("Reverse bubble sort is:", numbers);
