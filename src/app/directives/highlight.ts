import { Directive, ElementRef, inject, Input } from '@angular/core';
import { User } from '../services/user';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onHighlight()',
    '(mouseleave)': 'reset()',

  }
})
export class Highlight {

  private element = inject(ElementRef);
  private userService = inject(User);

  @Input()
  appHighlightColor: string = 'yellow';

  @Input()
  appHighlightHeight: string = '20px';


  constructor() {}

  onHighlight() {
    if (this.userService.isLoggedIn) {
      this.element.nativeElement.style.backgroundColor =
        this.appHighlightColor === '' ? 'yellow' : this.appHighlightColor;
    }
  }

  reset() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
