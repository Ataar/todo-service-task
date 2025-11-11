import { Component, Input, OnInit } from '@angular/core';
import { Admission, Cart, ClassSchedule, Conference, EcommerceOrder, Enrollment, GuestBook, IBooking, ICourse, IEmployee, IMeeting, Insurance, Invoice, Movie, Order, OrderNow, PatientRecord, Playlist, Product, ProductSell, RestaurantOrder, Shipment, Student, Ticket, Transaction, TransactionBank, } from 'src/app/modules/comp-A';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
 @Input() childMessage: string = '';
  @Input() data01!:IMeeting 
  @Input() data02!:Student;
  @Input() data03!:IEmployee;
  @Input() data04!:IBooking;
  @Input() data05!:ICourse;
  @Input() data06!:Order;
  @Input() data07!:Playlist;
  @Input() data08!:Enrollment;
  @Input() data09!:PatientRecord;
  @Input() data10!:Transaction;
  @Input() data11!:Product;
  @Input() data12!:Movie;
  @Input() data13!:Shipment;
  @Input() data14!:Admission;
  @Input() data15!:Conference;
  @Input() data16!:Invoice;
  @Input() data17!:OrderNow;
  @Input() data18!:Ticket;
  @Input() data19!:TransactionBank;
  @Input() data20!:ProductSell;
  @Input() data21!:GuestBook;
  @Input() data22!:Cart;
  @Input() data23!:RestaurantOrder;
  @Input() data24!:ClassSchedule;
  @Input() data25!:EcommerceOrder;


  ngOnInit(): void {
  }

  message:string = 'C componenet is In working' 
}
