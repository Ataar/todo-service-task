import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from 'src/app/modules/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


tododArr : Itodo[] = []
  todoItem!: string
  isEdit: boolean = false;
  editId!: number;

  constructor(private todo :TodoService) { }

  ngOnInit(): void {
  this.todo.fetchalldata().subscribe(res=>{
   this.tododArr = res
  })
  }

  onAdd() {
  if (!this.todoItem) return;

  let newTodo: Itodo = {
    todoId: this.isEdit ? this.editId : this.tododArr.length + 1,
    todoItem: this.todoItem
  };

  if (this.isEdit) {
    this.todo.updateTodo(newTodo).subscribe(res => {
      this.tododArr = res;
      this.isEdit = false;
    });
  } else {
    this.todo.addTodo(newTodo).subscribe(res => {
      this.tododArr = res;
    });
  }

  this.todoItem = "";
}


onEdit(item: Itodo) {
  this.todoItem = item.todoItem; 
  this.editId = item.todoId;
  this.isEdit = true;
}



    onDelete(id: number) {
    this.todo.deleteTodo(id).subscribe(res => {
      this.tododArr = res;
    });
  }
     
}
