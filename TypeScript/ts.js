/*-------------------------------------------------------------------------------------------------------------------------------------
    基础类型
-------------------------------------------------------------------------------------------------------------------------------------*/
//boolean
var booleanType = true;
//string
var stringType = "字符串类型";
console.log("\u5B57\u7B26\u4E32\u6A21\u677F\u7C7B\u578B" + stringType + "\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5FC5\u987B\u7528\u53CD\u5355\u5F15\u53F7\u548C$\u7B26\u53F7");
//number
var numType = 7;
//[]数组
var arrayStr = ["a", "b", "c"];
var arrayNum = [1, 3, 5];
//还有一个数组类型是只读的：ReadonlyArray<number/string/等……>，这样的变量不能赋给其它变量，不可修改数组内的变量值!
var arrayFanXing = ["数组泛型的表示法"];
//enum枚举类型,使用枚举类型可以为一组数值赋予友好的名字,有限范围的变量值
var Color;
(function (Color) {
    Color[Color["Monday"] = 0] = "Monday";
    Color[Color["Tuesday"] = 1] = "Tuesday";
    Color[Color["Wednesday"] = 2] = "Wednesday";
})(Color || (Color = {}));
;
var c = Color.Tuesday;
console.log(c); //输出1，即Red和0等价，Green和1等价，Blue和2等价
console.log(Color[0]); //输出Red
//any 类型，好处就在于在某些不知道用户将会输入什么类型的情况下，避开检查
var anyType;
anyType = "hello";
var arrayAny = ["a", 1, true];
arrayAny[0] = 9;
console.log(anyType.length);
//空值void，什么类型都不是的是就是void，比如函数没有返回值,或者一个变量，但只能赋给undefined或者null
var voidType = undefined;
var undefine = undefined;
var nullType = null;
//never类型，表示不存在的类型，它是任何类型的子类型，但它本身没有子类型，除了本身可以赋给never，任何类型都不能赋给never类型的变量
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//类型断言，表示你很确定某个变量一定是某个类型，ty不会去检查，有两种方式使用【<类型>变量】  或者  【变量 as 类型】 
var someValue = "hello", strLength = someValue.length, strLength2 = someValue.length;
function getInter(obj) {
    console.log(obj.name);
}
//注意这里用的是逗号分隔
var x = { name: "lhl", age: 27, gender: "男" };
getInter(x);
var thisFun;
thisFun = function (str1, age1) {
    return true;
};
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
//当把DigtalClock传入时，首相会检查此类的构造器是否符合ClockContructor接口的构造器签名
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
