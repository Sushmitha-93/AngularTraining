"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(color, side) {
        this.color = color;
        this.side = side;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    Square.prototype.perimeter = function () {
        return 4 * this.side;
    };
    Square.prototype.display = function () {
        console.log("Color: ", this.color);
        console.log("Side: ", this.side);
    };
    return Square;
}());
exports.Square = Square;
