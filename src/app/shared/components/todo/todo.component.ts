import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from 'src/app/modules/todo';
import { NgForm } from '@angular/forms';

@Component({
selector: 'app-todo',
templateUrl: './todo.component.html',
styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

@ViewChild('todoForm') todoForm!: NgForm;

tododArr: Itodo[] = [];
todoItem: string = '';
isEdit: boolean = false;
editId!: number;

constructor(private todo: TodoService) { }

ngOnInit(): void {
this.todo.fetchalldata().subscribe(res => {
this.tododArr = res;
});
}



onAdd() {
if (this.todoForm.invalid) return;

const newTodo: Itodo = {
todoId: this.tododArr.length + 1,
todoItem: this.todoItem
};

console.log(newTodo);



this.todo.addTodo(newTodo).subscribe(res => {
this.tododArr = res;
this.todoForm.resetForm(); 
});
}



onUpdate() {
const updatedTodo: Itodo = {
todoItem: this.todoItem,
todoId: this.editId
};

this.todo.updateTodo(updatedTodo).subscribe(res => {
this.tododArr = res;
this.resetForm();
});
}

private resetForm() {
this.todoForm.resetForm();
this.todoItem = '';
this.isEdit = false;
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
