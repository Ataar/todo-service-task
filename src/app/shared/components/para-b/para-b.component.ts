import { Component, Input, OnInit } from '@angular/core';
import { ChildData, Employee, Iusers } from 'src/app/modules/parent-b';

@Component({
  selector: 'app-para-b',
  templateUrl: './para-b.component.html',
  styleUrls: ['./para-b.component.scss']
})
export class ParaBComponent implements OnInit {
  @Input() data!: ChildData;
  constructor() { }

  ngOnInit(): void {
  }

}

