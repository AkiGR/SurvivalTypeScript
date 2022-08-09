const array = [ 1 , 2 , 3 , 4 , 5 ];
const [ one , tow , three ] = array;
console.log(one); // 1
console.log(tow); // 2
console.log(three); // 3

// 途中要素の分割代入
const array2 = [ 1 , 2 , 3 , 4 , 5 ];
const [ , , , four , five ] = array2;
console.log(four); // 4
console.log(five); // 5

// 残余部分の代入
const array3 = [ 1 , 2 , 3 , 4 , 5 ];
const [ one2 , ...rest] = array3;
console.log(one2); // 1
console.log(rest); // [ 2 , 3 , 4 , 5 ]






