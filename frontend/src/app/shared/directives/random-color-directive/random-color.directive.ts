import { AfterViewInit, Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit, AfterViewInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  private readonly el = inject(ElementRef);
  private selectedColor: string = '';

  private readonly colors: string[] = [
    '#e91e63', 
    '#9c27b0', 
    '#673ab7', 
    '#3f51b5', 
    '#2196f3', 
    '#009688', 
    '#ff5722'  
  ];

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.selectedColor = this.colors[randomIndex];
    this.backgroundColor = this.selectedColor;
  }

  ngAfterViewInit(): void {
    const label = this.el.nativeElement.querySelector('.mdc-evolution-chip__text-label');
    if (label) {
      label.style.color = '#fff';
    }
  }

}
