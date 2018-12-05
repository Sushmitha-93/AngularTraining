interface Shape{
    area():number;
    perimeter():number;
}

export class Square implements Shape{
    color:string;
    side:number;

    constructor(color:string, side:number){
        this.color=color;
        this.side=side;
    }

    area():number{
         return this.side*this.side;
    }

    perimeter():number{
        return 4*this.side;
    }

    display(){
        console.log("Color: ",this.color)
        console.log("Side: ", this.side)
    }
}