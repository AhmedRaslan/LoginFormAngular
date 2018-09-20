import { element } from 'protractor';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddressdir]'
})
export class AddressdirDirective {


  constructor(private li:ElementRef) {
    li.nativeElement.style.color='yellow';
   }

}
