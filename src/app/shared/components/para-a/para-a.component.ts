import { Component, OnInit } from '@angular/core';
import { ChildData, Employee, Iusers } from 'src/app/modules/parent-b';

@Component({
  selector: 'app-para-a',
  templateUrl: './para-a.component.html',
  styleUrls: ['./para-a.component.scss']
})
export class ParaAComponent implements OnInit {
  parentName: string = "Mateen";                 // String
  parentAge: number = 24;                        // Number
  isActive: boolean = true;                      // Boolean
  skillList: string[] = ["Angular", "HTML", "CSS"];  // Array

  userObj :Iusers  = {                                    // Object
    id: 101,
    city: "Mumbai",
    phone: "9970546320"
  };

  // Custom Type / Interface
  employee: Employee = {
    empName: "Aamir",
    department: "IT",
    salary: 45000
  };



  // 👇 Final data object (combine all)
  childData: ChildData = {
    name: this.parentName,
    age: this.parentAge,
    status: this.isActive,
    skills: this.skillList,
    userDetails: this.userObj,
    employeeInfo: this.employee
  };
  constructor() { }

  ngOnInit(): void {
  }

}
