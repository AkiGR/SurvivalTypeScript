// start //
// letの変数宣言
let a = 1 ;
a = 2 ; // letは再代入可能

let b ; // 初期値無しで定義可能。（初期値無しの場合はundefinedになる）
b = 1 ; // 後で代入

// constの変数宣言
const c = 1 ; // 初期値が必要
c = 2 ; // constで宣言した変数は再代入不可!

// let・constの使い分け
// 基本的にはconstを使用し、constが使えない場合にletを使用すると良い。


// constは可変オブジェクトを保護しない（配列も同じ）
// constは再代入不可な変数を作成するだけなのでオブジェクトの変更が出来てしまう。
const obj = { a : 1 } ;
obj = { a : 2 } ; // 再代入不可!
obj.a = 2 ; // プロパティの変更が可能
// end //

// オブジェクトを不変にする
let obj2 : {
  // 読み取り専用にしたいプロパティにreadonly修飾子をつける
  readonly foo : number ;
};
obj2 = { foo: 1 } ;
obj2.foo = 2 ; // プロパティを変更できない!

// readonlyは再帰的ではない
// オブジェクトが入れ子になっている場合はそのオブジェクトのプロパティまで読み取り専用にはしない。
let obj3 : {
  readonly foo : {
    bar : number ;
  };
};
obj3 = {
  foo : {
    bar : 1 ,
  },
};
obj3.foo = { bar : 2 } ; // 再代入不可!
obj3.foo.bar = 2 ; // コンパイルエラーにはならない

// 子などの各プロパティも読み取り専用にしたい場合はreadonlyをつける必要がある。
let obj4 : {
  readonly foo : {
    readonly bar : number;
  };
};
// 一括して読み取り専用にする
let obj5 : Readonly<{
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}>;