
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../modules/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@ViewChild('todo') eleRef! : ElementRef
  
  isEdit: boolean = false;
  
  
  uuid = () => {
    return (
String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
).replace(/[xy]/g, (character) => {
  const random = (Math.random() * 16) | 0;
  const value = character === "x" ? random : (random & 0x3) | 0x8;
  return value.toString(16);
});
};

todoArr:Array<Itodo>= [
  {
    todoItem:'Hi Myself Mateen',
    todoId:this.uuid()

  }

]
  constructor() { }

  ngOnInit(): void {
  }


  add()
  {
     let obj = 
     {
       todoItem:this.eleRef.nativeElement.value,
       todoId:this.uuid()
      }
      this.todoArr.unshift(obj)
      this.eleRef.nativeElement.value = ''
      
    }

  onEdit(t:Itodo)
  {
    this.isEdit = true
    this.eleRef.nativeElement.value = t.todoItem
    localStorage.setItem('editId' , t.todoId)
     
  }

   onUpdate()
  {
    let todoUpdateId = localStorage.getItem('editId')
    if(todoUpdateId)
    {
      let todoUpdatedObj = 
      {
        todoItem:this.eleRef.nativeElement.value,
      todoId:todoUpdateId
      }
        let getIndex = this.todoArr.findIndex(todo=>todo.todoId === todoUpdateId)
    this.todoArr[getIndex] = todoUpdatedObj
    this.eleRef.nativeElement.value = ''
    }

  }


   onDelete(tdelete:Itodo)
  {
    let del = this.todoArr.findIndex(del=>del.todoId===tdelete.todoId)
    this.todoArr.splice(del , 1)
  }

  trackByTodo(_index:number, item:Itodo){
  return item.todoId;
}

}
