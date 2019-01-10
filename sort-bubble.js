const sort = (arr) => {
  if (!arr.length) return;
  for (let i = 0, leng = arr.length; i < leng; i++) {
    for (let j = 0; j < leng - i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        let value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = value;
      }
    }
  }
  return arr;
};

console.log(sort([13, 2, 4, 1, 7, 20, 5]));
