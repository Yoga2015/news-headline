// let arr = [5, 1, 6, 2, 7, 6, 3];   // 从小到大
let arr = [5, 1, 6, 2, 7, 6, 3];   // 从小到大

for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 0; j <= arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);