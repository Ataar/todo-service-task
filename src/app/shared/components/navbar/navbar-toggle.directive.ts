import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavbarToggle]'
})
export class NavbarToggleDirective {
 @Input('appNavbarToggle') targetId!: string;

  @HostListener('click', ['$event'])
  onToggle(event: Event) {
    const target = document.getElementById(this.targetId);

    if (target) {
      target.classList.toggle('show');
    }
  }
  constructor() { }

}
