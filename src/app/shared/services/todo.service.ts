
// ======================= IMPORT STATEMENTS =======================

// Injectable -> Angular ka decorator, jis se ye service dependency injection ke through provide ho sakti hai
import { Injectable } from '@angular/core';

// Observable, of -> RxJS se import
// Observable -> asynchronous data stream handle karne ke liye
// of() -> Observable banane ke liye jo immediately value return karega
import { Observable, of } from 'rxjs';

// Itodo -> Interface jo todo object ka structure define karta hai
import { Itodo } from 'src/app/modules/todo';


// ======================= @Injectable DECORATOR =======================

@Injectable({
  providedIn: 'root'
  // providedIn: 'root'
  // iska matlab ye service pura application me available hogi bina module me add kiye (Singleton service)
})
export class TodoService {
  // Class ka naam TodoService
  // Ye business logic aur data handling ke liye responsible hoti hai


  // ======================= TEMPORARY TODO DATA =======================
  todoArr: Array<Itodo> = [
    // todoArr -> array store karega saare todo objects
    // Array<Itodo> -> array type jo Itodo ko follow karega (todoId + todoItem)

    { todoId: 1, todoItem: 'Complete Angular project documentation' },
    // Object with ID and text

    { todoId: 2, todoItem: 'Fix UI bugs in the dashboard layout' },
    
    { todoId: 3, todoItem: 'Review pull requests from team members' }
  ];
  // Ye static dummy data hai abhi ke liye (backend nahi lagaya)


  // ======================= CONSTRUCTOR =======================
  constructor() { }
  // constructor -> initialize hone par call hota
  // abhi empty hai kyunki koi inject nahi kiya


  // ======================= FETCH ALL TODOS =======================
  fetchalldata(): Observable<Itodo[]> {
    // Method return type -> Observable<Itodo[]>
    // Itodo[] -> array of todos

    return of(this.todoArr);
    // of(this.todoArr) -> todoArr list ko Observable bana kar return kar diya
  }


  // ======================= ADD NEW TODO =======================
  addTodo(data: Itodo): Observable<Itodo[]> {
    // data -> new todo object jo push hona hai

    this.todoArr.push(data);
    // array me naya todo add kar diya

    return of(this.todoArr);
    // updated array as Observable return
  }


  // ======================= UPDATE TODO =======================
  updateTodo(updatedTodo: Itodo): Observable<Itodo[]> {
    // updatedTodo -> object jo UI se aata hai edit hone ke baad

    const index = this.todoArr.findIndex(t => t.todoId === updatedTodo.todoId);
    // findIndex -> array me wo todo dhundta jiska ID updatedTodo.todoId ke barabar ho
    // index -> mila to uska position number, nahi mila to -1 milta hai

    if (index !== -1) {
      // agar todo exist karta hai (index -1 nahi):

      this.todoArr[index] = updatedTodo;
      // array ke index wala old todo replace kar diya updated todo ke saath
    }

    return of(this.todoArr);
    // updated array return
  }


  // ======================= DELETE TODO =======================
  deleteTodo(id: number): Observable<Itodo[]> {
    // id -> delete karne wale todo ka id

    this.todoArr = this.todoArr.filter(x => x.todoId !== id);
    // filter -> sare elements except jiska ID match hora (remove ho gaya)

    return of(this.todoArr);
    // updated list return
  }
}







// -------------------------------------------------------------------------














// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Itodo } from 'src/app/modules/todo';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   todoArr: Array<Itodo> = [
//     { todoId: 1, todoItem: 'Complete Angular project documentation' },
//     { todoId: 2, todoItem: 'Fix UI bugs in the dashboard layout' },
//     { todoId: 3, todoItem: 'Review pull requests from team members' }
//   ];

//   constructor() { }

//   fetchalldata(): Observable<Itodo[]> {
//     return of(this.todoArr);
//   }

//   addTodo(data: Itodo): Observable<Itodo[]> {
//     this.todoArr.push(data);
//     return of(this.todoArr);
//   }

//   updateTodo(updatedTodo: Itodo): Observable<Itodo[]> {
//     const index = this.todoArr.findIndex(t => t.todoId === updatedTodo.todoId);
//     if (index !== -1) {
//       this.todoArr[index] = updatedTodo;
//     }
//     return of(this.todoArr);
//   }

//   deleteTodo(id: number): Observable<Itodo[]> {
//     this.todoArr = this.todoArr.filter(x => x.todoId !== id);
//     return of(this.todoArr);
//   }
// }


