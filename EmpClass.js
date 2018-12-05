"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Class demo
var Employee = /** @class */ (function () {
    /*
    constructor(empid:number, ename:string, isOnBench:boolean){
        this.empid=empid;
        this.ename=ename;
        this.isOnBench=isOnBench;
    }*/
    // Default Constructor: "?" makes feilds optional
    function Employee(empid, ename, isOnBench) {
        this.empid = empid;
        this.ename = ename;
        this.isOnBench = isOnBench;
    }
    Employee.prototype.displayEmp = function () {
        console.log("****************************");
        console.log('Employee ID: ', this.empid);
        console.log('Name: ', this.ename);
        console.log('isOnBench? ', this.isOnBench);
    };
    return Employee;
}());
exports.Employee = Employee;
// INHERITENCE
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(noOfRepotees, empid) {
        var _this = _super.call(this, empid) // MUST CALL ITS PARENT CONSTRUCTOR
         || this;
        _this.noOfRepotees = noOfRepotees;
        return _this;
    }
    Manager.prototype.displayManager = function () {
        this.displayEmp();
        console.log("No. of Repotees: ", this.noOfRepotees);
    };
    return Manager;
}(Employee));
var emp1 = new Employee(11375321, "Sushmitha", false); //parameterised
emp1.displayEmp();
var emp2 = new Employee(); //since all parameters are optional
emp2.displayEmp();
var man = new Manager(25, 12345);
man.displayManager();
var p1 = {
    pid: 1,
    pname: 'Sushmitha',
    age: 34
};
console.log(p1);
console.log("Person Name: ", p1.pname); // can access person interface using "."
console.log("Person Age:", p1.age);
