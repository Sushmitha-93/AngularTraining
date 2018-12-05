var company:String="Accenture"  //String
console.log(company)

var num:number=90;              //number 
var isValid:boolean=true;       //boolean

var data:any;                   // datatype can be anything (used when not sure of the data)
data="mydata in string";           //can store String
data=false;                        //can change it to store boolean


// Arrays
var numArray:number[]=[1,2,3,4];     //arrays are dynamic unlike in other langs
for(var num of numArray){
    console.log(num)
}

// Enumerations
enum color{Red,Green,Blue}
var c:color=color.Red;
console.log(c)

//fuction declaration
function add(num1:number, num2:number):number{
    return num1+num2;
}

console.log("Sum is: ",add(5,3))