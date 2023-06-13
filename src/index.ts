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

//3.3.3
//type User = {name: string; age: number};
//const u: User = {
//    name: "blyu",
//    age: 26,
//    //telnumber: "08077084516",
//};
//
//const uu = {
//    name: "blyu",
//    age: 21,
//    telnumber: "08077084516",
//}
//const us : User= uu;

//3.4.1
//type User<T> = {
//    name: string;
//    child:T;
//}
//
//type Family<Parent,Child> = {
//    mother: Parent;
//    father: Parent;
//    child: Child;
//};

//3.4.2
//const obj: Family<number,string> = {
//    mother: 0,
//    father: 0,
//    child: "10000",
//};
////const obj2: Family = {
////    mother: 0,
////    father: 0,
////    child: "10000",
////};

//3.4.3
//type HasName = {
//    name: string;
//};
//type Family< Parent extends HasName, Child extends HasName> = {
//    mother: Parent;
//    father: Parent;
//    baby: Child;
//};
////type home = Family<number,string>;
//type Animal = {
//    name: string;
//}
//type Human = {
//    name: string;
//    age: number;
//}
//type T = Family<Animal,Human>;

//3.4.4
//type Human = {
//    name: string;
//    age: number;
//}
//type Animal = {
//    name: string;
//}
//type Family<Parent = Animal, Child extends Animal = Animal> = {
//    mother: Parent;
//    father: Parent;
//    baby: Child;    
//}
//type s = Family<string>;
//type t = Family<string,Animal>;
//type u = Family;

//3.5.1
//const arr = [0,123,-456 * 100];
//console.log(arr);
//const arr2 = [0, "123", 456];
//console.log(arr2);
//const arr3 = [0, "123", 456, ...arr];
//console.log(arr3);

//3.5.2
//const arr = [0,123,-456 * 100];
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr);
//arr[1] = 42;
//console.log(arr);
//arr = [42,42,42,];

//3.5.3
//const arr:Number[] = [0,123,-456 * 100];
//const arr2:String[] = [0,123,-456 * 100];

//3.5.4
//const arr:readonly number[] = [1,10,100];
////arr[1] = 42;

//3.5.5
//const arr = [1,10,100];
//arr.push(1000);
//console.log(arr);
//console.log(arr.includes(10))
//console.log(arr.includes(20))
//console.log(arr.length)
////arr.push("foobar");
////console.log(arr.includes("foobar"))
//
//const arr: readonly number[] = [1,10,100];
//arr.push(1000);

//3.5.6
//const arr = [1,10,100];
//for(let elm of arr){
//	elm *= 10; 
//	console.log(elm);
//}
//console.log(arr);

//3.5.7
//const taple: [string, number] = ['foo', 0];
//const str = taple[0];
//const num = taple[1];
//type arr = [name: string, age: number];
//const taple2 : arr= ["goge",0];

//3.6.1
//const obj = {
//	foo: "hello",
//	bar: "world",
//}
//const {foo,bar} = obj;
//console.log(foo);
//console.log(bar);
//const {
//	foo: foo_plus,
//	bar: bar_plus,
//} = obj
//console.log(foo_plus);
//console.log(bar_plus);

//3.6.2
//const nested = {
//	num: 123,
//	obj:{
//		foo:"hello",
//		bar:"word",
//	}
//}
//const {num, obj:{foo,bar}} = nested;
//console.log(num);
//console.log(foo);
//console.log(bar);
////console.log(obj);

//3.6.3
//const arr = [1,2,4,8,16,32];
//const [first, second, therd] = arr;
//console.log(first);
//console.log(second);
//console.log(therd);
//const arr2 = [{number: 1,},{number: 2,},{number: 4,},{number: 8,},{number: 16,},];
//const [first, second, therd] = arr2;
//const [{number}] = arr2;
//console.log(number);
//console.log(first);
//console.log(second);
//console.log(therd);
//const [,foo,,bar,,baz] = arr;
//console.log(foo);
//console.log(bar);
//console.log(baz);

//3.6.4
//type obj = {foo?:number};
//let obj1: obj = {};
//const {foo} = obj1;
//console.log(foo);
//const {foo:foo2 = 500} = obj1;
//console.log(foo2);
//const nullpbj = {foo:null};
//const {foo = 500} = nullpbj;
//console.log(foo);
//type Nestedobj = {
//	obj?:{
//		foo:number,
//	}
//};
//const nested1: Nestedobj = {};
//const {obj:{foo} = {foo:500}} = nested1;
////const {obj:{foo}} = nested1;
//console.log(foo);

//3.6.5
//const obj = {
//	foo: 123,
//	bar: "string",
//	baz: false,
//};
//const {bar, ...rest} = obj;
//console.log(bar);
//console.log(rest)
//const arr = [1,2,3,4,5,6,7,8];
//const [first, second ,...rest] = arr;
//console.log(first);
//console.log(second);
//console.log(rest);
//const [,,x, y ,...z] = arr;
//console.log(x);
//console.log(y);
//console.log(z);

//3.7.1
//const d = new Date();
//console.log(d);
//const d2 = new Date("2020-02-03T15:00:00+09:00");
//console.log(d2);
//const date = new Date("2020-02-03T15:00:00+09:00");
//const time = date.getTime();
//console.log(time);
//const date2 = new Date(time);
//console.log(date2);

//3.7.2
//const r :RegExp = /ab+c/;
//console.log(r.test("abbbbc"));
//console.log(r.test("hello abc world"));
//console.log(r.test("ABC"));
//console.log(r.test("こんにちは"));

//3.7.3
//console.log("Hello, abbbbc world abc".replace(/ab+c/,"foobar"));
//console.log("Hello, abbbbc world abc".replace(/ab+c/g,"foobar"));
//const result = "Hello, abbbbc world abc".match(/a(b+)c/);
//if (result !== null){
//	for (let elm in result){
//		console.log();
//		console.log(elm);
//		console.log(result[elm]);
//	}
//}
//
//const result1 = "Hello, abbbbc world abc".match(/a(?<wordname>b+)c/);
//if (result1 !== null){
//	for (let elm in result1){
//		console.log();
//		console.log(elm);
//		console.log(result1[elm]);
//	}
//}

//3.7.4
//const map: Map<string, Number>  = new Map();
//map.set("foo", 123);
//console.log(map.get("foo"));
//console.log(map.get("bar"));

//3.7.5
//const str = "Hello World!";
//console.log(str.length);
//type HasLength = {length:number};
//const obj:HasLength = "hello world";
//let val:{} = 123;
//val = "foobar";
//val = {num:123};
////val = null;
////val = undefined;

//3.8.1
//type User = {
//	name:string,
//	age:number,
//	premiumUser:boolean,
//}
//const data :string = `
//uhyo,26,1
//Jhon Smith,17,0
//Mary Sue,14,1
//`
//const users:User[] = [];
//const lines = data.match(/([^\n].*)\n/g);
//if (lines !== null){
//	for(const line of lines){
//		const elms = line.match(/([^,]*),([0-9]*),([01])\n/);
//		if (elms !== null){
//				const a_user :User = {
//				name: elms[1],
//				age: Number(elms[2]),
//				premiumUser: Boolean(Number(elms[3])),
//			}
//			users.push(a_user);
//		}
//	}
//}
//for(const user of users){
//	if (user.premiumUser){
//		console.log(`${user.name}(${user.age}) is Premium User`)
//	}else{
//		console.log(`${user.name}(${user.age}) is not Premium User`)
//	}
//}

//4.3.1
//type human = {
//    name:string,
//};
//type student = {
//    name:string,
//    grade:number,
//}
//
//const formstudent = (age:number):student=>({
//    name:"someone",
//    grade:age,
//});
//const f:(x:number)=>human = formstudent;
//const h :human = f(20);

