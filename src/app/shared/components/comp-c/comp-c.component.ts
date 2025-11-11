import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss']
})
export class CompCComponent implements OnInit {
   @Input() grandChild!:string

   
  constructor() { }
  ngOnInit(): void {
  }
 
  

}


