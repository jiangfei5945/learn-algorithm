const sort = (arr) => {
  if (!arr.length) return;
  for (let i = 0, leng = arr.length; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(sort([13, 2, 4, 1, 7, 20, 5]));
