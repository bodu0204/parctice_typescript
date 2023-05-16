//1.3.3
//const massage: string = "Hello World!";
//console.log(massage);

import { type } from "os";


//2.1.1
//const greeting = "hello, ";
//const target = "world!";
//console.log(greeting + target);

//const greeting = "hello, ";
//const target = greeting;
//console.log(greeting + target);

//const greeting = "hello, ";
//const text = greeting + "world!";
//console.log(text);

//const i:number = 3;
//if (i < 10){
//    console.log("iは10未満です")
//}

//2.2.2
//const あいう = 123;
//const 技術評論社 = あいう + 876;
//console.log(技術評論社);

//const ↑ = 0;//error

//2.2.4
//let greeting = "hello, ";
//greeting = greeting + "world!";
//console.log(greeting)

//let greeting: string, string: string;
//greeting = "hello, ";
//string = "world!";
//console.log(greeting + string);

//let greeting: string, string: string;
//greeting = "hello, ";
//console.log(greeting + string);//error

//2.3.3
//const num1 = 1e3;
//console.log(num1); 
//const num2 = 314e-2;
//console.log(num2); 
//const milion = 100_000_000;
//console.log(milion); 

//2.3.4
//const bignum:bigint = (123n + 456n) * 2n;
////const bignum:bigint = (123n + 456n) * 2;//error
//console.log(bignum);

//2.3.5
//const str:string = `hello<\\n>
//world`;
//console.log(str);
//const str1:string = "hello";
//const str2:string = "world";
//const str3:string = `${str1}, ${str2}`;
//console.log(`${str1}, ${str2}`);
//console.log(str3);
//console.log(`1 + 2 = ${1 + 2}`);

//2.3.6
//console.log("hello \u{796d} world");

//2.3.9
//import { createInterface } from "readline";
//const rl = createInterface({
//    input: process.stdin,
//    output: process.stdout,
//});
//rl.question("文字列を入力せよ>", (line)=>{
//    console.log(`line + 100 = ${line + 100}`);
//    rl.close();
//})

//2.3.10
//import { createInterface } from "readline"; 
//const rl = createInterface({
//    input: process.stdin,
//    output: process.stdout,
//});
//rl.question("数値を入力せよ>", (line)=>{
//    const num :number = Number(line);
//    console.log(num + 100);
//    rl.close();
//})

//const num1 :number = Number(null);
//const num2 :number = Number(undefined);
//console.log(num1);
//console.log(num2);
//const num3 :number = Number("42tokyo");
//console.log(num3);
//const bigint1 = BigInt("foooo")//error
//console.log(bigint1);
//const bigint2 = BigInt(NaN)//error
//console.log(bigint2);
//console.log(Boolean("0"));
//console.log(Boolean("hello"));
//console.log(Boolean(""));
//console.log(Boolean(null));
//console.log(Boolean(undefined));
//console.log(Boolean(NaN));

//2.4.1
//const num1 = 2 ** 8;
//console.log(num1)
//const num2 = 3.14 % 3;
//console.log(num2)
//const num3 = 3.9 % 1.2;
//console.log(num3)

//2.4.4
//console.log(42 === 42);
//console.log(null === null);
//console.log(undefined === undefined);
//var nan:number = NaN;
//console.log(nan === nan);
//console.log(Number.isNaN(nan));


//2.4.6
//import { createInterface } from "readline";
//const lr = createInterface({
//    input:process.stdin,
//    output:process.stdout,
//});
//lr.question("名前を入れよ", (name:string)=>{
//    const display_name1 = name || "名無し";
//    const display_name2 = name ?? "default";
//    const display_name3 = null ?? "default";
//    const display_name4 = undefined ?? "default";
//    console.log(`こんにちは'${display_name1}'さん`);
//    console.log(`こんにちは'${display_name2}'さん`);
//    console.log(`こんにちは'${display_name3}'さん`);
//    console.log(`こんにちは'${display_name4}'さん`);
//    lr.close();
//});

//2.4.7
//import { createInterface } from "readline";
//const lr = createInterface({
//    input:process.stdin,
//    output:process.stdout,
//});
//lr.question("数値を入力せよ", (str :string)=>{
//    const num = Number(str);
//    const massage = num >= 0 && num < 100 
//    ? `${num}は0以上100未満です。`
//    : `${num}は0以上100未満ではない。`;
//    console.log(massage);
//    lr.close()
//});

//2.4.8
//import { createInterface } from "readline";
//const lr = createInterface({
//    input:process.stdin,
//    output:process.stdout,
//});
//
//lr.question("名前を入力せよ",(name :string)=>{
//    name ||= "no_name";
//    console.log(`名前は${name}。`);
//    lr.close();
//});

//2.6
//for (let i = 1; i < 100; i++) {
//    switch(Number(!(i % 3)) | Number(!(i % 5)) << 1)
//    {
//        case 0b01:
//            console.log("Fizz");
//        break;
//        case 0b10:
//            console.log("Buzz");
//        break;
//        case 0b11:
//            console.log("FizzBuzz");
//        break;
//        default:
//            console.log(i);
//        break;
//    }
//}

//3.1.1
//const obj = {
//    foo: 123,
//    bar: "hello word",
//};
//console.log(obj.foo);
//console.log(obj.bar);

//3.1.2
//import { createInterface } from "readline"
//const lr = createInterface({
//    input:process.stdin,
//    output:process.stdout,
//})
//lr.question("名前を入力せよ", (input:string)=>{
//    const name = input?input:"名無し";
//    const user = {
//        name,
//        name1:input?input:"名無し",
//        age:20,
//    }
//    console.log(user.name);  
//    console.log(user.name1);  
//    console.log(user.age);
//    lr.close();
//});

//3.1.3
//const str = "hello"
//const obj = {
//    "foo": 123,
//    "foo bar":-500,
//    "→↑←↓":314,
//    1:111,
//    2.05:2005,
//    [str + "world"]:"こんにちは世界"
//}
//console.log(obj.foo);
//console.log(obj["foo"]);
//console.log(obj["foo bar"]);
//console.log(obj["→↑←↓"]);
//console.log(obj[1]);
//console.log(obj[2.05]);
//console.log(obj["1"]);
//console.log(obj["2.05"]);
//console.log(obj.helloworld);

//3.1.4
//const user = {
//    name:"tanabe",
//    age:25,
//};
//user.age = 23;
//console.log(user.age);
//import { createInterface } from "readline";
//const rl = createInterface({
//    input:process.stdin,
//    output:process.stdout,
//});
//const msg = {
//    positive:"正の数",
//    negative:"負の数または0",
//}
//rl.question('数値を入力せよ', (line :string)=>{
//    const num = Number(line);
//    console.log(msg[num>0?"positive":"negative"]);
//    rl.close();
//});
//msg = {          //error
//    positive:"+",
//    negative:"- or 0",
//}



//3.3.2
//type Animal = {
//    age : number;
//};
//type Human = {
//    age : number;
//    iq : number;
//};
//const human: Human = {
//    age : 12,
//    iq :100,
//};
//const animal: Animal = human;
//console.log(animal.age);
//human.age = 60;
//console.log(animal.age);

//4.3.1
//type human = {
//    name:string,
//};
//type student = {
//    name:string,
//    grade:number,
//}//

//const formstudent = (age:number):student=>({
//    name:"someone",
//    grade:age,
//});
//const f:(x:number)=>human = formstudent;
//const fv:(x:number)=>void = formstudent;
//const h :human = f(20);
//fv(20);
//console.log(h);

