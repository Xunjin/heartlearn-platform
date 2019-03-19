import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacityOnHover]'
})
export class OpacityOnHoverDirective {

  @Input() opacity = '70%';
  constructor(private el: ElementRef, private render: Renderer2) {
  }

  @HostListener('mouseover')
  opacityOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `opacity(${this.opacity})`);
  }

  @HostListener('mouseleave')
  opacityOff() {
    this.render.setStyle(this.el.nativeElement,
       'filter', 'opacity(100%)');
}
}
