var company = "Accenture"; //String
console.log(company);
var num = 90; //number 
var isValid = true; //boolean
var data; // datatype can be anything (used when not sure of the data)
data = "mydata in string"; //can store String
data = false; //can change it to store boolean
// Arrays
var numArray = [1, 2, 3, 4]; //arrays are dynamic unlike in other langs
for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
    var num = numArray_1[_i];
    console.log(num);
}
// Enumerations
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var c = color.Red;
console.log(c);
//fuction declaration
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: ", add(5, 3));
