import { Directive, ElementRef } from '@angular/core'; //add ElementRef

@Directive({
  selector: '[appMyHilighter]'  // must be used has an attribute and not as a tag
})
export class MyHilighterDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
    element.nativeElement.style.background = 'yellow';
  }
}
