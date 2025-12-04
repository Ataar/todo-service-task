import { Component, Input, OnInit } from '@angular/core';
// Input decorator allow karta hai Parent -> Child data transfer ke liye

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() userAlert!: (msg: string) => void;
  // @Input() -> Parent se aane wali value receive karne ke liye
  // userAlert -> variable jisme Parent ka function store hoga
  // ! (non-null assertion) -> compiler ko batata hai ki ye value definitely milegi
  // (msg: string) => void -> Define karta hai ki ye ek function hoga
  //     msg: string   -> input parameter type
  //     void          -> function koi value return nahi karega

  callParent() {
    // callParent -> Child ka apna function
    // Ye button click par run hoga aur parent ka function trigger karega
    this.userAlert("Hello from Child");
    // this.userAlert() -> Parent ka function call ho raha hai
    // "Hello from Child" -> argument jo parent ko send ho raha hai
  }

  constructor() { }

  ngOnInit(): void { }

}



