const sort = (arr) => {
  if (!arr.length) return;
  for (let i = 1, leng = arr.length; i < leng; i++) {
    let current = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(sort([13, 2, 4, 1, 7, 20, 5]));
