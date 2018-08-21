var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var compani11 = "Manipal";
console.log(compani11);
var location1111 = "10";
// transpile the code using tsc command and use node to execute this file
for (var index = 0; index < 10; index++) { }
console.log(index);
for (var i = 0; i < 10; i++) { }
//console.log(i);
var myName = "SomeName";
//myName=10;
var a = 10, b = 20, sum = a + b;
console.log("sum of " + a + " + " + b + " = " + sum);
console.log("sum of " + a + " + " + b + " = " + sum);
function myFunc(arg1) {
    return "Hello" + arg1;
}
console.log("Function returns:" + myFunc("Manipal"));
var fruits = ["mango", "orange", "apples"];
function printfruits(arg1, arg2, arg3) {
    console.log("Fruit 1:" + arg1 + ",2:" + arg2 + ",3:" + arg3);
}
var _a = fruits.slice(), x = _a[0], y = _a[1], z = _a[2]; //SPREAD operation -- Destructuring
printfruits(x, y, z);
function collectValues() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Arguments are:" + args);
}
collectValues(1, 2, 3, 4, 5);
var array = [1, 2, 3, 4, 5];
var newArray = array.map(function (value) { return value + 10; });
console.log("original array " + array + ",updated array:" + newArray);
var Student = /** @class */ (function () {
    function Student(num, name, gender, section) {
        this.section = section;
        this.rollNo = num;
        this.name = name;
        this.gender = gender;
    }
    Student.prototype.showDetails = function () {
        console.log("RollNo:" + this.rollNo + ",name:" + this.name + ",gender:" + this.gender);
    };
    return Student;
}());
var myobj = new Student(10, 'Manipal', 'Male', 'sem');
myobj.showDetails();
myobj.rollNo = 101;
var BaseClass = /** @class */ (function () {
    function BaseClass(name) {
        this.baseClassName = name;
    }
    BaseClass.prototype.showDetails = function () {
        console.log("Base Vlaue: " + this.baseClassName);
        // console.log(`child value: ${this.myName}`);
    };
    return BaseClass;
}());
var DerivedcClass = /** @class */ (function (_super) {
    __extends(DerivedcClass, _super);
    function DerivedcClass(baseName, myName) {
        var _this = _super.call(this, baseName) || this;
        _this.myName = myName;
        return _this;
    }
    DerivedcClass.prototype.showDetails = function () {
        console.log("Base Vlaue: " + this.baseClassName);
        console.log("child value: " + this.myName);
    };
    return DerivedcClass;
}(BaseClass));
var dc = new DerivedcClass("BASE CLASS", "DERIVED CLASS");
var bc = new BaseClass("BASE CLASS");
dc.showDetails();
bc = dc;
bc.showDetails();
var InterfaceImpl = /** @class */ (function () {
    function InterfaceImpl() {
    }
    InterfaceImpl.prototype.showDetails = function () {
        console.log("Interface is implemented");
    };
    InterfaceImpl.prototype.anotherMethod = function () {
        return "nothing";
    };
    return InterfaceImpl;
}());
var obj1 = new InterfaceImpl();
var infobj = obj1;
infobj.showDetails();
obj1.anotherMethod();
obj1.showDetails();
