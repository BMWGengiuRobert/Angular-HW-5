import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Directive({
  selector: '[appTechIcons]'
})
export class TechIconsDirective implements OnInit {

  @Input('appTechIcons') headline: string = '';

  private matIcon = inject(MatIcon, { self: true });
  private el = inject(ElementRef);

  private readonly techIconMap = [
    { keyword: 'typescript', name: 'typescript-custom', color:'#3178C6' },
    { keyword: 'javascript', name: 'javascript-custom', color:'#F7DF1E' },
    { keyword: 'angular', name: 'angular-custom', color:'#DD0031' },
    { keyword: 'nestjs', name: 'nestjs-custom', color:'#E0234E' },
    { keyword: 'node.js', name: 'nodejs-custom', color:'#339933' },
    { keyword: 'rxjs', name: 'rxjs-custom', color:'#D3107D' },
    { keyword: 'html', name: 'html-custom', color:'#E34F26' },
    { keyword: 'css', name: 'css-custom', color:'#1572B6' },
    { keyword: 'sql', name: 'sql-custom', color:'#4479A1' },
    { keyword: 'git', name: 'git-custom', color:'#F05033' }
  ]

  ngOnInit(): void {
    const headlineLower = this.headline.toLowerCase();
    const matchedTech = this.techIconMap.find(tech => headlineLower.includes(tech.keyword));
    if (matchedTech) {
      this.matIcon.svgIcon = matchedTech.name;
      this.el.nativeElement.style.color = matchedTech.color;
    }
  }

}