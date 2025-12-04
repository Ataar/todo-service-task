import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  confirmAction(msg: string) {
    // msg => child se aaya hua message
    const result = confirm(msg);  
    // confirm() -> professional browser confirm dialog
    // result -> boolean value return karta hai (true / false)

    if (result) {
      console.log("User selected: YES");
      alert("Operation confirmed successfully!");
    } else {
      console.log("User selected: NO");
      alert("Operation cancelled!");
    }
    
  }

  constructor() { }

  ngOnInit(): void {}

}
