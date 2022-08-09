const array = [ 1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  console.log(index, array[index]);
  // 0 1
  // 1 2
  // 2 3
  // 3 4
  // 4 5
}

// for-of文
for (const value of array ) {
  console.log(value);
  // 1 2 3 4 5の順番で出力
}

// forEach
array.forEach((value, i) => {
  console.log(value, i);
  // 1 0
  // 2 1
  // 3 2
  // 4 3
  // 5 4
});