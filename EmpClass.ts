//Class demo
export class Employee{     //use "export" to export the class so that it can be used in other files
    empid:number;
    ename:string;
    isOnBench:boolean;
    
    /*
    constructor(empid:number, ename:string, isOnBench:boolean){
        this.empid=empid;
        this.ename=ename;
        this.isOnBench=isOnBench;
    }*/

    // Default Constructor: "?" makes feilds optional
    constructor(empid?:number, ename?:string, isOnBench?:boolean){
        this.empid=empid;
        this.ename=ename;
        this.isOnBench=isOnBench;
    }

    displayEmp(){
        console.log("****************************")
        console.log('Employee ID: ',this.empid)
        console.log('Name: ',this.ename)
        console.log('isOnBench? ',this.isOnBench)        
    }
}

// INHERITENCE
class Manager extends Employee{
    noOfRepotees:number

    constructor(noOfRepotees:number, empid:number){
        super(empid)                     // MUST CALL ITS PARENT CONSTRUCTOR
        this.noOfRepotees=noOfRepotees;        
    }

    displayManager(){
        this.displayEmp();
        console.log("No. of Repotees: ",this.noOfRepotees)
    }
}

var emp1=new Employee(11375321,"Sushmitha",false) //parameterised
emp1.displayEmp();

var emp2=new Employee() //since all parameters are optional
emp2.displayEmp();

var man=new Manager(25,12345)
man.displayManager();

//tsc empClass.ts
//node empClass.js


//INTERFACE: to create objects with same sturcture i.e specific feilds
interface Person{
    pid:number,
    pname:String,
    age:number
}

var p1:Person={
    pid:1,
    pname:'Sushmitha',
    age:34
}

console.log(p1)
console.log("Person Name: ",p1.pname) // can access person interface using "."
console.log("Person Age:", p1.age)
