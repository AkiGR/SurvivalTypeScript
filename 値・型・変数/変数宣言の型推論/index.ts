// TypeScriptには型推論という機能がある（コンパイル時が型を自由に判別する機能）
let x = 1 ; // let x: number = 1;と同じ意味になる
x = "hello" ; // number型にStrin型を代入しようとしているのでエラーになる!