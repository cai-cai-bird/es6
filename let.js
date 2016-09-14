/**
 * Created by sa on 16-9-14.
 */
//基本用法
{
    var a= "cai";
    let b= "cai";
}
console.log("a: "+ a);
console.log("-----------------------------------");
//console.log(b);  let 声明的变量 只在声明的当前代码块内起作用  b is not defined
// var a = [];
// for(var i=0;i<9;i++){
//     a[i]= function () {
//         console.log(i)
//     }
// }
// a[6]();  // 9

var a = [];
for(let i=0;i<9;i++){
    a[i]= function () {
        console.log("a[6]: " + i)
    }
}
a[6](); //6
console.log("-----------------------------------");
//变量不会提前声明
console.log(foo); //undefined
//console.log(bar); //不能提前声明 bar is not defined

var foo = "foo";
let bar = "bar";

console.log("-----------------------------------");

//暂时性死区
var temp = 123;//temp is not defined
if(true){
    //temp=456;//只要当前作用域存在let let就只在当前作用域有用 在使用之前必须申明
    let temp;
    temp=456;
    console.log(temp);
}
console.log("-----------------------------------");
//不允许重复声明变量
function func() {
    //var a= 1;
    let a= 1; // 不允许重复声明 不管是var 还是 let的声明的
    //let a= 2;
}
func();
//块级作用域
var aa=123;
function aaa() {
    console.log(aa);
    if(false){
       aa= 456; // 123
        var aaa=456; //undefined
    }
}
aaa();
console.log("-----------------------------------");
var str="example";
var arr=[];
for(var j=0;j<str.length;j++){
    arr.push(str[j]);
}
console.log(arr,j);
console.log("-----------------------------------");
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();
// 上面的函数有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果使用var定义变量n，最后输出的值就是10。
console.log("-----------------------------------");