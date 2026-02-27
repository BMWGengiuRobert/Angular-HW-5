import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{

  @Input('appHighlight') headline: string = '';
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  private containsAngularWord : boolean = false;
  
  ngOnInit(): void {
    this.containsAngularWord = this.headline.toLowerCase().includes('angular');
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.containsAngularWord){
      this.backgroundColor = '#0e94d2';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }

  
}
