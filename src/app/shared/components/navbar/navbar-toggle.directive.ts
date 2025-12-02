import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavbarToggle]'
})
export class NavbarToggleDirective {
 @Input('appNavbarToggle') targetId!: string;

  constructor(private el: ElementRef) {}
  @HostListener('click', ['$event'])
  onToggle(event: Event) {
    const target = document.getElementById(this.targetId);

    if (target) {
      target.classList.toggle('show');
    }
    const parent = this.el.nativeElement.parentElement; 
     const menu = parent.querySelector('.dropdown-menu'); 
 
     if (menu) {
       menu.classList.toggle('show');   // show/hide dropdown
     
     }
  }
    
  }

