const compani11="Manipal";
console.log(compani11);
const location1111:string="10";
// transpile the code using tsc command and use node to execute this file
for(var index=0;index<10;index++){}
console.log(index);
for(let i=0;i<10;i++)
{}
//console.log(i);
let myName:string="SomeName";
//myName=10;
let a:number=10,b:number=20,sum:number=a+b;
console.log("sum of " + a +" + "+ b +" = " + sum);
console.log(`sum of ${a} + ${b} = ${sum}`);
function myFunc(arg1:string):string{
    return "Hello"+arg1;
}
console.log(`Function returns:${myFunc("Manipal")}`);
let fruits=["mango","orange","apples"];
function printfruits(arg1,arg2,arg3){
    console.log(`Fruit 1:${arg1},2:${arg2},3:${arg3}`);


}
let[x,y,z]=[...fruits];//SPREAD operation -- Destructuring
printfruits(x,y,z);
function collectValues(...args){
console.log
    (`Arguments are:${args}`);
}
collectValues(1,2,3,4,5);
let array=[1,2,3,4,5];
let newArray=array.map((value)=>value+10);
console.log(`original array ${array},updated array:${newArray}`);
class Student {
    rollNo:number;
    name:string;
    gender:string;

    constructor(num:number,name:string,gender:string,private section:string){
        this.rollNo=num;
        this.name=name;
        this.gender=gender;
    }
    showDetails()
    {
        console.log(`RollNo:${this.rollNo},name:${this.name},gender:${this.gender}`)
    }
}
    let myobj=new Student(10,'Manipal','Male','sem');
    myobj.showDetails();myobj.rollNo=101;

class BaseClass{
    baseClassName:string;
    constructor(name:string){
        this.baseClassName=name;
    }
        showDetails()
        {
            console.log(`Base Vlaue: ${this.baseClassName}`);
           // console.log(`child value: ${this.myName}`);
    
        }
    }

class DerivedcClass extends BaseClass{
    constructor(baseName:string,private myName:string){
        super(baseName);
    
    }
    showDetails()
    {
        console.log(`Base Vlaue: ${this.baseClassName}`);
        console.log(`child value: ${this.myName}`);

    }
}
let dc=new DerivedcClass("BASE CLASS","DERIVED CLASS");
let bc=new BaseClass("BASE CLASS");
dc.showDetails();
bc=dc;
bc.showDetails();
interface IBase{
    showDetails():void;
}
class InterfaceImpl implements IBase{
    showDetails():void{
        console.log("Interface is implemented");
    }
    anotherMethod()
    {
        return "nothing";
    }
}
let obj1=new InterfaceImpl();
let infobj=obj1 as IBase;
infobj.showDetails();
obj1.anotherMethod();
obj1.showDetails();


