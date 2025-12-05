import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Itodo } from 'src/app/modules/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr: Array<Itodo> = [
    { todoId: 1, todoItem: 'Complete Angular project documentation' },
    { todoId: 2, todoItem: 'Fix UI bugs in the dashboard layout' },
    { todoId: 3, todoItem: 'Review pull requests from team members' }
  ];

  constructor() { }

  fetchalldata(): Observable<Itodo[]> {
    return of(this.todoArr);
  }

  addTodo(data: Itodo): Observable<Itodo[]> {
    this.todoArr.push(data);
    return of(this.todoArr);
  }

  updateTodo(updatedTodo: Itodo): Observable<Itodo[]> {
    const index = this.todoArr.findIndex(t => t.todoId === updatedTodo.todoId);
    if (index !== -1) {
      this.todoArr[index] = updatedTodo;
    }
    return of(this.todoArr);
  }

  deleteTodo(id: number): Observable<Itodo[]> {
    this.todoArr = this.todoArr.filter(x => x.todoId !== id);
    return of(this.todoArr);
  }
}
