import { Component } from '@angular/core';
import { Product } from './productInterface';
import { decreaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  today: Date = new Date();  // variable today INTERPOLATION

  // tslint:disable-next-line:no-inferrable-types
  counter: number = 0;

  mycolor: string = 'maroon'; // PROPERTY BINIDING

  mytext: string = 'Enter text'; // TWO WAY BINDING (import FormsModule)

  guessColor: string = '';

  prod: Product = {
    pid: 101,
    pname: 'Television',
    price: 45000
  };

  sayHello() {
    alert('Hello() from Component');
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

}
