import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() confirmMessage!: (msg: string) => void;
  // Parent ka function receive karega

  inputMessage: string = ""; 
  // Input box se value store karega

  askConfirmation() {
    // Button click par parent function call hoga
    this.confirmMessage(this.inputMessage);
    this.inputMessage  = ''
  }


  constructor() { }

  ngOnInit(): void {}

}
