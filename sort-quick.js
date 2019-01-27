function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  var pivotValue = arr[end];
  var startIndex = start;
  for (var i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, startIndex);
      startIndex++;
    }
  }
  swap(arr, startIndex, end);
  return startIndex;
}

function quickSort(arr, start, end) {
  if (start < end) {
    var partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
}

function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
}

let oldArray = [13, 2, 4, 1, 7, 20, 5];
sort(oldArray);
console.log(oldArray);
