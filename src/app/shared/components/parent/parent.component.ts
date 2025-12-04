import { Component, OnInit } from '@angular/core';  
// Component & OnInit Angular ke built-in features hain
// Component decorator batata hai ki ye ek Angular component file hai
// OnInit ek lifecycle hook hai jo component load hone par trigger hota hai

@Component({
  selector: 'app-parent',                 // Selector, HTML tag jaisa kaam karta hai
  templateUrl: './parent.component.html', // Is component ka HTML structure yahan se connect hota hai
  styleUrls: ['./parent.component.scss']  // Is component ki styling (SCSS/CSS) file link
})
export class ParentComponent implements OnInit {
  // Class: iske andar functions & variables declare karte hain

  showMessage(msg: string) {     
    // showMessage -> Function name, jo child call karega
    // (msg: string) -> Function parameter type: string value expect karega (ts strict typing)
    alert("Message : "+ msg); 
    // "Message: " + msg -> String concatenation
    // Alert -> popup message screen par show karega
  }

  constructor() { }  // Constructor class initialize ke liye use hota hai, yahan empty hai

  ngOnInit(): void { 
    // ngOnInit life-cycle hook -> component fully load hone ke baad chalne wala function
  }

}


// question:- how to pass a function from parent to child and call 
// it on a button click to display a popup message?”

// answer flow:-  

// 1 - Parent component me ek function banaya:
//  2 - Parent function ko child ko diya:
// 3 - Child ne function ko receive kiya through @Input decorator:
// 4 - Button click par child ne call kiya: this.userAlert("Hello from Child")
//  5 - Parent function execute → Alert popup

// Button Click (Child)
//        │
//        ▼
// callParent()
//        │
//        ▼
// this.userAlert("Hello from Child")
//        │
//        ▼
// showMessage("Hello from Child") in Parent
//        │
//        ▼
// Alert: "Message: Hello from Child"

