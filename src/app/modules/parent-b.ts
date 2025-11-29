
export interface ChildData {
  name: string;
  age: number;
  status: boolean;
  skills: string[];
  userDetails: Iusers;
  employeeInfo: Employee;
}

export interface Iusers
{
    id: number;
    city: string;
    phone: string;
}

export interface Employee {
  empName: string;
  department: string;
  salary: number;
}

