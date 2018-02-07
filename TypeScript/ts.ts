/*-------------------------------------------------------------------------------------------------------------------------------------
	基础类型
-------------------------------------------------------------------------------------------------------------------------------------*/
//boolean
let booleanType:boolean=true;

//string
let stringType:string="字符串类型";
console.log(`字符串模板类型${stringType}，这种方式必须用反单引号和$符号`);

//number
let numType:number=7;

//[]数组
let arrayStr:string[]=["a","b","c"];
let arrayNum:number[]=[1,3,5];
//还有一个数组类型是只读的：ReadonlyArray<number/string/等……>，这样的变量不能赋给其它变量，不可修改数组内的变量值!
let arrayFanXing:Array<string>=["数组泛型的表示法"];


//enum枚举类型,使用枚举类型可以为一组数值赋予友好的名字,有限范围的变量值
enum Color {"Monday", "Tuesday", Wednesday};
let c: Color = Color.Tuesday;
console.log(c);			//输出1，即Red和0等价，Green和1等价，Blue和2等价
console.log(Color[0]);	//输出Red

//any 类型，好处就在于在某些不知道用户将会输入什么类型的情况下，避开检查
let anyType:any;
anyType="hello";
let arrayAny:any[]=["a",1,true];
arrayAny[0]=9;
console.log(anyType.length);

//空值void，什么类型都不是的是就是void，比如函数没有返回值,或者一个变量，但只能赋给undefined或者null
let voidType:void=undefined;
let undefine:undefined=undefined;
let nullType:null=null;

//never类型，表示不存在的类型，它是任何类型的子类型，但它本身没有子类型，除了本身可以赋给never，任何类型都不能赋给never类型的变量
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

//类型断言，表示你很确定某个变量一定是某个类型，ty不会去检查，有两种方式使用【<类型>变量】  或者  【变量 as 类型】 
let someValue:any="hello",
	strLength=(<string>someValue).length,
	strLength2=(someValue as string).length;

/*-------------------------------------------------------------------------------------------------------------------------------------
	声明var let const
	let  	完全就是 标准的变量声明，有局部、块级作用于的能力
	const	作用域能力和let一样但是，它声明的变量不能够修改，但是引用类型可以改变属性值
	demo：
	const obj={"name":"lhl"}; obj={"age":7}--->报错，因为改变了obj的引用！但是obj.name="李宏磊";--->就不会报错
-------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------
接口形式：1、对象形式，{属性……}，是一种自定义的对象类型;
			如果接口的属性不加"?"，那么当实现此接口时，必须和接口的属性个数/格式保持一致，否则报错
	  		如果加了"?"，那就是属性个数/格式是可选的，可以少于等于，
	  		当用let独立声明一个对象（没有":类型"），哪怕属性个数多余接口所需，也不会报错！
		2、函数签名形式
		  interface fun{
			  (变量名1:类型,变量名2:类型……) :返回类型
		  }
		3、可索引类型
		4、类 类型
-------------------------------------------------------------------------------------------------------------------------------------*/

//对象-属性形式
/*
	以下两种方式都会报错，原因是：如果传入对象字面量ts会进行额外的类型检查——多余的/拼写错误的
	getInter({name:"lhl",ages:27});
	getInter({name:"lhl",age:27,gender:"男"});

	解决方式：1、将对象字面量赋给一个变量，避开检查
	2、利用断言：({ width: 100, opacity: 0.5 } as SquareConfig)
	3、
*/
interface Inter{
	//注意这里用的是分号分隔
	name?:string;//还可以加上 readonly name?string;表示只读属性
	age?:number;
}
function getInter(obj:Inter):void{
	console.log(obj.name);
}
//注意这里用的是逗号分隔
let x={name:"lhl",age:27,gender:"男"};
getInter(x);



//函数签名形式
interface Fun{
	(str:string,age:number):boolean;
}
let thisFun:Fun;
thisFun=function(str1:string,age1:number){
	return true;
};



//类形式
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
//当把DigtalClock传入时，首相会检查此类的构造器是否符合ClockContructor接口的构造器签名
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);