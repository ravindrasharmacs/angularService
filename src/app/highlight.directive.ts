// src/app/highlight.directive.ts

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';
  private originalColor: string;

  constructor(private el: ElementRef) {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('click') onClick() {
    const currentColor = this.el.nativeElement.style.backgroundColor;
    if (currentColor === this.highlightColor) {
      this.el.nativeElement.style.backgroundColor = this.originalColor;
    } else {
      this.el.nativeElement.style.backgroundColor = this.highlightColor;
    }
  }
}
