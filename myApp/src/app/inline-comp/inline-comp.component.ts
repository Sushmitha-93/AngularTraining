import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-comp',
  template: `
    <h2>
      (Inline component) has template and style : ng g c inline-component -it -is
    </h2>
  `,
  styles: [`h2{color:green;}`]
})
export class InlineCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
