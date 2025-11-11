import { Component, OnInit } from "@angular/core";
import { Admission, Cart, ClassSchedule, Conference, EcommerceOrder, Enrollment, GuestBook, IBooking, ICourse, IEmployee, IMeeting, Invoice, Movie, Order, OrderNow, PatientRecord, Playlist, Product, ProductSell, RestaurantOrder, Shipment, Student, Ticket, Transaction, TransactionBank } from "src/app/modules/comp-A";


// Component with comments, all properties typed
@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
    message:string =  'Dynamic Data Showcase';
  // 1️⃣ Meeting
  // The meeting titled “Tech Strategy Discussion” is scheduled to be held on December 1, 2025, at 4:30 PM. It will take place in Conference Hall A located in Mumbai, where the company’s executives will gather to discuss strategic technology initiatives and future planning.
  meeting: IMeeting = {
    title: 'Tech Strategy Discussion',
    schedule: {
      date: '2025-12-01',
      time: '4:30 PM',
      location: { city: 'Mumbai', room: 'Conference Hall A' }
    }
  };

  // 2️⃣ Student
  // Aisha Khan, a bright and diligent student, achieved remarkable scores this semester. She secured 92 marks in Math and 88 in Science, resulting in an impressive overall grade of 90%. Her consistent performance reflects strong dedication toward academics.
  student: Student = {
    name: 'Aisha Khan',
    grades: {
      subjects: [
        { name: 'Math', marks: 92 },
        { name: 'Science', marks: 88 }
      ],
      overall: 90
    }
  };

  // 3️⃣ Employee
  // Rahul Sharma works as a Frontend Developer in the IT department, which is located on the 3rd floor of the corporate building. He plays a crucial role in developing user interfaces and collaborating with the backend team to deliver seamless digital experiences.
  employee: IEmployee = {
    id: 1024,
    info: {
      name: 'Rahul Sharma',
      position: 'Frontend Developer',
      department: { name: 'IT', floor: 3 }
    }
  };

  // 4️⃣ Booking
  // A flight booking has been confirmed for Simran Kaur, aged 29, who will be traveling from Delhi to Paris on December 25, 2025. She is flying in Business Class, and her seat number is 12B. This trip marks her first international journey during the holiday season.
  booking: IBooking = {
    passenger: { name: 'Simran Kaur', age: 29 },
    trip: {
      from: 'Delhi',
      to: 'Paris',
      date: '2025-12-25',
      seat: { type: 'Business', number: '12B' }
    }
  };

  // 5️⃣ Course
  // The Full Stack Web Development course spans over 6 months and is conducted by Vikram Patel, a renowned instructor known for his practical teaching style. For any assistance, he can be contacted via vikram@learnhub.com or on 9876543210. The program offers in-depth training in both frontend and backend technologies.
  course: ICourse = {
    title: 'Full Stack Web Development',
    duration: '6 months',
    instructor: {
      name: 'Vikram Patel',
      contact: { email: 'vikram@learnhub.com', phone: '9876543210' }
    }
  };

  // 6️⃣ Order
  // Anjali Verma placed an online order that included a Laptop priced at ₹75,000 and a Mouse priced at ₹1,200. The total bill amounted to ₹76,200. This purchase highlights her investment in high-quality tech equipment for professional use.
  order: Order = {
    orderId: 'ORD-5487',
    customer: { name: 'Anjali Verma' },
    items: [
      { name: 'Laptop', price: 75000 },
      { name: 'Mouse', price: 1200 }
    ],
    total: 76200
  };

  // 7️⃣ Playlist
  // Arnav curated a relaxing playlist titled “Chill Vibes”, featuring popular tracks like “Ocean Eyes” by Billie Eilish and “Sunflower” by Post Malone. The playlist perfectly blends calm melodies with modern pop, making it ideal for unwinding after a long day.
  playlist: Playlist = {
    name: 'Chill Vibes',
    createdBy: 'Arnav',
    songs: [
      { title: 'Ocean Eyes', artist: 'Billie Eilish' },
      { title: 'Sunflower', artist: 'Post Malone' }
    ]
  };

  // 8️⃣ Enrollment
  // Divya Nair, a second-year B.Tech Computer Science student, is enrolled in the Winter 2025 semester. Her subjects include Data Structures (3 credits) and Operating Systems (4 credits). She is guided by her academic advisor, Prof. Ajay Kumar, who can be reached at ajay@univ.edu for academic consultations.
  enrollment: Enrollment = {
    student: {
      id: 'ST-303',
      name: 'Divya Nair',
      year: 2,
      program: { name: 'B.Tech CSE', department: 'Computer Science' }
    },
    semester: 'Winter 2025',
    subjects: [
      { code: 'CS501', title: 'Data Structures', credits: 3 },
      { code: 'CS503', title: 'Operating Systems', credits: 4 }
    ],
    advisor: { name: 'Prof. Ajay Kumar', email: 'ajay@univ.edu' }
  };

  // 9️⃣ Patient Record
  // Rajeev Mehta, aged 45, visited Dr. Rakesh Sinha from the Cardiology department on October 10, 2025. His prescribed medications include Aspirin (75mg, once daily) and Atorvastatin (10mg, at night). His treatment is covered under his MediCare insurance policy (MC-9988).
  patientRecord: PatientRecord = {
    patientId: 'PT-4523',
    name: 'Rajeev Mehta',
    age: 45,
    visit: {
      date: '2025-10-10',
      doctor: { name: 'Dr. Rakesh Sinha', department: 'Cardiology' },
      prescription: [
        { medicine: 'Aspirin', dosage: '75mg', frequency: 'Once Daily' },
        { medicine: 'Atorvastatin', dosage: '10mg', frequency: 'Night' }
      ]
    },
    insurance: { provider: 'MediCare', policyNo: 'MC-9988' }
  };

  // 🔟 Transaction
  // Farhan Ali, account holder of XXXX-7865, made a Credit transaction of ₹15,000 at the Andheri branch on November 9, 2025. The transaction was processed through the State Bank of India (IFSC: SBIN0001234), reflecting his regular financial activity.
  transaction: Transaction = {
    account: { holder: 'Farhan Ali', number: 'XXXX-7865' },
    details: {
      amount: 15000,
      type: 'Credit',
      date: '2025-11-09',
      branch: { name: 'Andheri', ifsc: 'SBIN0001234' }
    }
  };

  // 1️⃣ Product
  // The SoundMax Wireless Headphones, priced at ₹4,999, offers top-notch sound quality with a 1-year manufacturer warranty. It holds a 4.5-star rating based on 230 customer reviews, showcasing its popularity and reliability among users.
  product: Product = {
    name: 'Wireless Headphones',
    price: 4999,
    manufacturer: { brand: 'SoundMax', warranty: '1 year' },
    reviews: { rating: 4.5, total: 230 }
  };

  // 12️⃣ Movie
  // The science-fiction masterpiece “Interstellar”, directed by Christopher Nolan from the UK, was released in 2014. The movie, presented in English, explores deep themes of space exploration, time dilation, and the endurance of human love.
  movie: Movie = {
    info: {
      title: 'Interstellar',
      director: { name: 'Christopher Nolan', country: 'UK' },
      release: { year: 2014, language: 'English' }
    }
  };

  // 13️⃣ Shipment
  // Shipment with tracking ID TRK9845 is currently In Transit and heading towards Chennai, India. The last update was recorded on November 7, 2025, indicating that the package is progressing through the logistics network smoothly.
  shipment: Shipment = {
    trackingId: 'TRK9845',
    destination: { city: 'Chennai', country: 'India' },
    status: { current: 'In Transit', lastUpdated: '2025-11-07' }
  };

  // 14️⃣ Admission
  // Rohan Mehta, aged 19, has been successfully admitted to IIT Bombay for a B.Tech in Computer Science and Engineering. His academic session begins in July 2025 and concludes in May 2029, marking the start of an exciting educational journey.
  admission: Admission = {
    student: { name: 'Rohan Mehta', age: 19 },
    college: { name: 'IIT Bombay', course: 'B.Tech CSE' },
    session: { start: '2025-07-01', end: '2029-05-31' }
  };

  // 15️⃣ Conference
  // The JSConf India 2025 conference will be held in Goa at the IT Convention Center. It will feature expert speakers such as Tanvi Singh, who will discuss Web Performance, and Harish Nair, who will share insights on Angular Best Practices. The event promises to bring together developers from across the country.
  conference: Conference = {
    name: 'JSConf India',
    year: 2025,
    location: { city: 'Goa', venue: 'IT Convention Center' },
    speakers: [
      { name: 'Tanvi Singh', topic: 'Web Performance' },
      { name: 'Harish Nair', topic: 'Angular Best Practices' }
    ]
  };

  // 16️⃣ Invoice
  // On October 20, 2025, Pooja Desai from Ahmedabad received an invoice numbered INV-2048 for her purchase of a Smartphone priced at ₹24,000 and a Charger priced at ₹1,500. The total billing amount stood at ₹25,500, marking another successful retail transaction.
  invoice: Invoice = {
    invoiceNo: 'INV-2048',
    customer: { name: 'Pooja Desai', city: 'Ahmedabad' },
    billing: {
      items: [
        { name: 'Smartphone', price: 24000 },
        { name: 'Charger', price: 1500 }
      ],
      total: 25500
    },
    date: '2025-10-20'
  };

  // 17️⃣ OrderNow
  // Ravi Kumar from Delhi placed an e-commerce order (ORD-7856) consisting of a Wireless Mouse and a Keyboard, with a total cost of ₹2,198. The order was delivered successfully, adding another positive experience to his online shopping record.
  orderNow: OrderNow = {
    orderId: 'ORD-7856',
    customer: { name: 'Ravi Kumar', location: 'Delhi' },
    items: [
      { name: 'Wireless Mouse', quantity: 1, price: 899 },
      { name: 'Keyboard', quantity: 1, price: 1299 }
    ],
    totalAmount: 2198,
    status: 'Delivered'
  };

  // 18️⃣ Ticket
  // Neha Sharma, aged 29, will be flying with Air India on flight AI-302 from Mumbai to Singapore on December 4, 2025. Her seat number is 14B, and she is excited for her upcoming international journey.
  ticket: Ticket = {
    passenger: { name: 'Neha Sharma', age: 29 },
    flight: {
      airline: 'Air India',
      number: 'AI-302',
      route: { from: 'Mumbai', to: 'Singapore' }
    },
    seat: '14B',
    date: '2025-12-04'
  };

  // 19️⃣ TransactionBank
  // On November 2, 2025, Kiran Verma transferred ₹5,000 from her account SB-9820 to Manoj Das at account SB-7411. The transaction, recorded under TXN987654, reflects smooth and secure digital banking between the two parties.
  transactionBank: TransactionBank = {
    txnId: 'TXN987654',
    sender: { name: 'Kiran Verma', account: 'SB-9820' },
    receiver: { name: 'Manoj Das', account: 'SB-7411' },
    amount: 5000,
    date: '2025-11-02'
  };

  // 20️⃣ ProductSell
  // The MacBook Air M3 (PRD-501) features an Apple M3 processor, 512GB SSD storage, and comes in an elegant Midnight color. Priced at ₹1,34,999, this laptop is one of Apple’s premium products offering top-tier performance and design.
  productSell: ProductSell = {
    id: 'PRD-501',
    title: 'MacBook Air M3',
    specs: { processor: 'Apple M3', storage: '512GB SSD', color: 'Midnight' },
    price: 134999
  };

  // 21️⃣ GuestBook
  // Rekha Joshi booked a Deluxe room (407) at the luxurious Blue Lagoon Hotel in Goa for 3 nights. Her check-in date is December 20, 2025, ensuring a perfect beachside vacation experience.
  guestBook: GuestBook = {
    bookingId: 'HTL-3342',
    guest: { name: 'Rekha Joshi', nights: 3 },
    hotel: { name: 'Blue Lagoon', city: 'Goa' },
    room: { type: 'Deluxe', number: 407 },
    checkIn: '2025-12-20'
  };

  // 22️⃣ Cart
  // Simran Kaur has two items in her online shopping cart: two T-shirts and a pair of Sneakers. The total payable amount is ₹4,597, and she is likely to proceed to checkout soon.
  cart: Cart = {
    user: { name: 'Simran Kaur' },
    items: [
      { name: 'T-shirt', quantity: 2, price: 799 },
      { name: 'Sneakers', quantity: 1, price: 2999 }
    ],
    total: 4597
  };

  // 23️⃣ Restaurant Order
  // At table number 5, Pratik Deshmukh placed an order consisting of Paneer Tikka and Butter Naan. The total bill was ₹380, making it a delicious and affordable dining experience.
  restaurantOrder: RestaurantOrder = {
    orderId: 'RES-9807',
    customer: { name: 'Pratik Deshmukh', table: 5 },
    items: [
      { name: 'Paneer Tikka', price: 320 },
      { name: 'Butter Naan', price: 60 }
    ],
    total: 380
  };

  // 24️⃣ Class Schedule
  // The Mathematics class taught by Mr. Rajesh is scheduled in Room 201A from 10:00 AM to 11:00 AM. The session focuses on advanced concepts, ensuring students get conceptual clarity and practice.
  classSchedule: ClassSchedule = {
    subject: 'Mathematics',
    teacher: { name: 'Mr. Rajesh', room: '201A' },
    time: { start: '10:00 AM', end: '11:00 AM' }
  };

  // 25️⃣ Ecommerce Order
  // Tanya Kapoor placed an online order (ORD-9999) for an iPhone 15 and AirPods Pro, together priced at ₹1,04,998. Her delivery address is 45, Rosewood Apartments, Gurgaon (PIN: 122002). The order was paid via Credit Card, the payment status is Paid, and the delivery is Dispatched, expected to arrive by November 12, 2025.
  ecommerceOrder: EcommerceOrder = {
    orderId: 'ORD-9999',
    customer: {
      name: 'Tanya Kapoor',
      contact: { email: 'tanya.kapoor@mail.com', phone: '9876543210' },
      address: {
        street: '45, Rosewood Apartments',
        city: 'Gurgaon',
        pin: 122002
      }
    },
    items: [
      { name: 'iPhone 15', qty: 1, price: 79999 },
      { name: 'AirPods Pro', qty: 1, price: 24999 }
    ],
    payment: { mode: 'Credit Card', status: 'Paid' },
    delivery: { expected: '2025-11-12', status: 'Dispatched' }
  };

  constructor() { }

  ngOnInit(): void { }
}