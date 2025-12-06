// ======================= IMPORT STATEMENTS =======================

// 'import' keyword TypeScript me use hota hai doosre files / libraries se
// code ya cheezen lene ke liye, taa ki yaha use kar sakein.
import { Component, OnInit, ViewChild } from '@angular/core';
// Component  -> Angular ko batata hai ki ye class ek Component hai
// OnInit    -> ek Lifecycle Interface hai, jisme ngOnInit() method hota hai
// ViewChild -> Template (HTML) ke andar ke kisi element / component ka reference lene ke liye use hota hai

import { TodoService } from '../../services/todo.service';
// TodoService -> custom service jo tumne banaya hoga, jisme API calls / data logic rakha hai

import { Itodo } from 'src/app/modules/todo';
// Itodo -> ek Interface hai jo todo object ka structure define karta hai (todoId, todoItem, etc.)

import { NgForm } from '@angular/forms';
// NgForm -> Angular forms ka object jo template-driven forms ke liye use hota hai
// isse hum form ki state (valid/invalid, value, etc.) handle kar sakte hain


// ======================= @Component DECORATOR =======================

@Component({
// selector: ye HTML tag ka naam hota hai jisse hum is component ko kisi aur
// template me use kar sakte hain, jaise <app-todo></app-todo>
selector: 'app-todo',

// templateUrl: ye batata hai ki is component ka HTML file ka path kya hai
templateUrl: './todo.component.html',

// styleUrls: ye array hai CSS/SCSS files ka jo sirf is component ke liye apply hongi
styleUrls: ['./todo.component.scss']
})

// ======================= CLASS DEFINITION =======================

// export: is keyword ka matlab hai ki ye class bahar ke files me import ki ja sakti hai
// class TodoComponent: ye ek class hai jisme todo related logic rakha hai
// implements OnInit: iska matlab hai ye class OnInit interface follow karegi,
// aur iske andar ngOnInit() method compulsory likhna padega
export class TodoComponent implements OnInit {

// ======================= @ViewChild =======================

// @ViewChild('todoForm')
// ye Angular decorator hai jo template ke andar ke kisi element / directive /
// component ka reference leta hai, jiska template reference variable naam 'todoForm' hai
@ViewChild('todoForm') todoForm!: NgForm;
// todoForm!: NgForm
// todoForm -> class property ka naam
// !         -> non-null assertion operator: Angular ko batate ho ki ye value future me zaroor assign hogi
// NgForm    -> iska type hai, yani ye NgForm ka instance hoga


// ======================= CLASS PROPERTIES =======================

// tododArr: Itodo[] = [];
// tododArr -> array jo saare todos store karega
// Itodo[]  -> ye batata hai ki ye array Itodo type objects ka hoga
// = []     -> initial value empty array
tododArr: Itodo[] = [];

// todoItem: string = '';
// todoItem -> single todo text ko hold karega (input box ka value)
// string   -> iska type string hai
// ''       -> initially empty string
todoItem: string = '';

// isEdit: boolean = false;
// isEdit -> ye bataega ki abhi hum "Add mode" me hai ya "Edit mode" me
// boolean -> true / false value
// false   -> initially add mode (koi edit nahi)
isEdit: boolean = false;

// editId!: number;
// editId -> jis todo ko edit kar rahe hain uska ID store karega
// number -> type number hai
// !      -> Angular ko batate ho ki ye future me zaroor set hoga
editId!: number;


// ======================= CONSTRUCTOR =======================

// constructor(private todo: TodoService) { }
// constructor -> special method jo class ka object banate waqt run hota hai
// private todo: TodoService
// private -> ye property sirf is class ke andar use ho sakti hai
// todo    -> ye property ka naam hai jisse hum service ko use karenge
// TodoService -> is property ka type hai, yani ye TodoService ka instance hoga
// Angular isko Dependency Injection se provide karega
constructor(private todo: TodoService) { }


// ======================= ngOnInit LIFECYCLE HOOK =======================

// ngOnInit(): void {
// OnInit interface ka method, automatically call hota hai jab component load ho jata hai
// : void -> iska matlab function kuch return nahi karega
ngOnInit(): void {
// this.todo.fetchalldata()
// this.todo -> constructor me inject kiya hua TodoService ka instance
// fetchalldata() -> service ka method jo saare todos lane ke liye use hoga (probably HTTP GET)

this.todo.fetchalldata().subscribe(res => {
// .subscribe(...) -> Observable ko "listen" karne ke liye
// res -> response jo backend / service se aayega (Itodo[] type ka)

this.tododArr = res;
// response me milne wala data hum apne local array 'tododArr' me assign kar dete hain
// jisse HTML me list render ho jaati hai
});
}


// ======================= ADD TODO FUNCTION =======================

// onAdd() { ... }
// ye method tab chalega jab user "Add" button press karega (template me (click)="onAdd()")
onAdd() {
// if (this.todoForm.invalid) return;
// ye check karta hai ki form valid hai ya nahi (required fields wagaira)
// agar form invalid hai to function yahi ruk jayega, neeche ka code nahi chalega
if (this.todoForm.invalid) return;

// const newTodo: Itodo = { ... }
// const -> aisi value jisko baad me re-assign nahi kar sakte
// newTodo -> variable jo ek todo object store karega
// : Itodo -> type annotation, batata hai ki newTodo Itodo type follow karega
const newTodo: Itodo = {
// todoId: this.tododArr.length + 1,
// todoId -> unique id for todo
// this.tododArr.length + 1 -> current array length + 1 se new id generate kar rahe
todoId: this.tododArr.length + 1,

// todoItem: this.todoItem
// todoItem -> interface me defined property
// this.todoItem -> input box me jo user ne likha hai wo value
todoItem: this.todoItem
};

// console.log(newTodo);
// ye browser console me new todo object ko print karega debugging ke liye
console.log(newTodo);

// this.todo.addTodo(newTodo)
// service ka method call kar rahe hain new todo ko add karne ke liye
this.todo.addTodo(newTodo).subscribe(res => {
// subscribe ka callback 'res' me updated todo list mil sakta hai (server se)
this.tododArr = res;
// jo naya list aaya usko local array ko assign kar diya, UI me list update ho jayega

// this.todoForm.resetForm();
// ye pura form reset kar dega (values, validation state, sab)
this.todoForm.resetForm();
});
}


// ======================= UPDATE TODO FUNCTION =======================

// onUpdate() { ... }
// ye method tab chalega jab user "Update" button press karega (edit mode me)
onUpdate() {
// const updatedTodo: Itodo = { ... }
// ye object existing todo ko update karne ke liye use hoga
const updatedTodo: Itodo = {
// todoItem: this.todoItem
// input box me jo edited text hai wo yaha aayega
todoItem: this.todoItem,

// todoId: this.editId
// editId me humne onEdit() ke time pe jo todo select kiya tha uska id store kiya hai
todoId: this.editId
};

// this.todo.updateTodo(updatedTodo)
// service ka update method call kar rahe hain jo backend me update karega
this.todo.updateTodo(updatedTodo).subscribe(res => {
// res -> updated todos list
this.tododArr = res;
// local array ko updated list se replace kar diya

// this.resetForm();
// form, flags, sab ko clean karne ke liye private method call kar rahe hain
this.resetForm();
});
}


// ======================= PRIVATE RESET FUNCTION =======================

// private resetForm() { ... }
// private -> is method ko sirf is class ke andar hi call kar sakte hain
private resetForm() {
// this.todoForm.resetForm();
// form ka UI, values, validation state sab ko reset karega
this.todoForm.resetForm();

// this.todoItem = '';
// input wale variable ko bhi manually empty kar rahe (double sure)
this.todoItem = '';

// this.isEdit = false;
// edit mode se wapas add mode me switch kar rahe
this.isEdit = false;
}


// ======================= EDIT TODO FUNCTION =======================

// onEdit(item: Itodo) { ... }
// ye method tab chalega jab user kisi todo ke edit icon / button pe click karega
// item: Itodo -> parameter jo selected todo object ko represent karega
onEdit(item: Itodo) {

// this.todoItem = item.todoItem;
// todo ka text input box me daal diya, taaki user change kar sake
this.todoItem = item.todoItem;

// this.editId = item.todoId;
// jis todo ko edit kar rahe hain uska id yaad rakh liya, update ke time ye use hoga
this.editId = item.todoId;

// this.isEdit = true;
// isEdit ko true kar diya, taaki HTML me button "Update" dikhe na ki "Add"
this.isEdit = true;
}


// ======================= DELETE TODO FUNCTION =======================

// onDelete(id: number) { ... }
// ye method tab chalega jab user kisi todo ke delete button pe click karega
// id: number -> delete karne wale todo ka id
onDelete(id: number) {
// this.todo.deleteTodo(id)
// service ka method call kar rahe id ke basis pe todo delete karne ke liye
this.todo.deleteTodo(id).subscribe(res => {
// res -> delete ke baad ka updated todo list
this.tododArr = res;
// local array ko updated list se replace kar diya, UI me turant change dikhega
});
}
}






// --------------------------------------------------------------------------------------







// import { Component, OnInit, ViewChild } from '@angular/core';
// import { TodoService } from '../../services/todo.service';
// import { Itodo } from 'src/app/modules/todo';
// import { NgForm } from '@angular/forms';

// @Component({
// selector: 'app-todo',
// templateUrl: './todo.component.html',
// styleUrls: ['./todo.component.scss']
// })
// export class TodoComponent implements OnInit {

// @ViewChild('todoForm') todoForm!: NgForm;

// tododArr: Itodo[] = [];
// todoItem: string = '';
// isEdit: boolean = false;
// editId!: number;

// constructor(private todo: TodoService) { }

// ngOnInit(): void {
// this.todo.fetchalldata().subscribe(res => {
// this.tododArr = res;
// });
// }



// onAdd() {
// if (this.todoForm.invalid) return;

// const newTodo: Itodo = {
// todoId: this.tododArr.length + 1,
// todoItem: this.todoItem
// };

// console.log(newTodo);



// this.todo.addTodo(newTodo).subscribe(res => {
// this.tododArr = res;
// this.todoForm.resetForm(); 
// });
// }



// onUpdate() {
// const updatedTodo: Itodo = {
// todoItem: this.todoItem,
// todoId: this.editId
// };

// this.todo.updateTodo(updatedTodo).subscribe(res => {
// this.tododArr = res;
// this.resetForm();
// });
// }

// private resetForm() {
// this.todoForm.resetForm();
// this.todoItem = '';
// this.isEdit = false;
// }


// onEdit(item: Itodo) {
// this.todoItem = item.todoItem;
// this.editId = item.todoId;
// this.isEdit = true;
// }

// onDelete(id: number) {
// this.todo.deleteTodo(id).subscribe(res => {
// this.tododArr = res;
// });
// }
// }



