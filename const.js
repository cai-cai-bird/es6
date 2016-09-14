/**
 * Created by sa on 16-9-14.
 */
//const声明的变量不可以改变 const 声明的变量不得改变值且在初始化的时候必须赋值 const和let一样  只在声明的代码段内起作用
//let const 定义的变量不会提前声明 都不可以重复声明 不管是var 的还是 let的 还是const的 只能定义一个变量
if(true){ //不管true和false 都可以用  作用域只在代码块内有用
    const num=200;
}
const num=100;
console.log(num);
//num =200; // Assignment to constant variable.
//const num =200;//Identifier 'num' has already been declared