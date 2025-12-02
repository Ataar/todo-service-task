// Angular core se required features import kar rahe hain
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // selector: '[app]' → is name se directive HTML attribute ke form me use hoga
  selector:'[app]'
})
export class NavbarToggleDirective {

  // @Input('app') → directive parent HTML se value lega
  // targetid!: string → ye variable wo id store karega jo HTML se pass hogi
  @Input('app') targetid!: string

  // constructor → jab directive create hota hai, ye run hota hai
  // ElementRef HTML element ka reference store karta hai jahan directive laga hai
  constructor(private el: ElementRef) {}

  // HostListener('click') → jab button par click hoga, ye function execute hoga
  @HostListener('click', ['$event'])
  ontoggle(event: Event)
  {
    // HTML document se us element ko dhundhna jiska id targetid me aaya hai
    const target = document.getElementById(this.targetid)

    // agar element mil gaya ...
    if(target)
    {
      // .classList.toggle('show') → CSS class 'show' ko add/remove karega (open/close effect)
      target.classList.toggle('show')
    }

    // jis element par directive use hua uska parent element nikal rahe hain
    const parent = this.el.nativeElement.parentElement

    // parent element ke andar '.dropdown-menu' class wala element search kar rahe hain
    const menu = parent.querySelector('.dropdown-menu');

    // agar dropdown-menu mila ...
    if(menu)
    {
      // dropdown ko bhi show/hide karue
      menu.classList.toggle('show')
    }
  }
}
