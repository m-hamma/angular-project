import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appPays]'
})
export class PaysDirective {

   constructor(private el: ElementRef,
                private renderer: Renderer2) {}

    ngAfterViewInit() {
      this.setBackgroundColor('black');
    }

    setBackgroundColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }

}
