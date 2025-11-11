export interface IMeeting {
  title: string;
  schedule: {
    date: string;
    time: string;
    location: {
      city: string;
      room: string;
    };
  };
}

export interface SubjectGrade {
  name: string;
  marks: number;
}

export interface Grades {
  subjects: SubjectGrade[];
  overall: number;
}

export interface Student {
  name: string;
  grades: Grades;
}

export interface IEmployee {
  id: number;
  info: {
    name: string;
    position: string;
    department: {
      name: string;
      floor: number;
    };
  };
}

export interface IBooking {
  passenger: {
    name: string;
    age: number;
  };
  trip: {
    from: string;
    to: string;
    date: string;
    seat: {
      type: string;
      number: string;
    };
  };
}

export interface ICourse {
  title: string;
  duration: string;
  instructor: {
    name: string;
    contact: {
      email: string;
      phone: string;
    };
  };
}

export interface OrderItem {
  name: string;
  price: number;
}

export interface Order {
  orderId: string;
  customer: { name: string };
  items: OrderItem[];
  total: number;
}

export interface Song {
  title: string;
  artist: string;
}

 export interface Playlist {
  name: string;
  createdBy: string;
  songs: Song[];
}

 export interface Enrollment {
  student: {
    id: string;
    name: string;
    year: number;
    program: {
      name: string;
      department: string;
    };
  };
  semester: string;
  subjects: {
    code: string;
    title: string;
    credits: number;
  }[];
  advisor: {
    name: string;
    email: string;
  };
}

 export interface Prescription {
  medicine: string;
  dosage: string;
  frequency: string;
}

 export interface PatientVisit {
  date: string;
  doctor: {
    name: string;
    department: string;
  };
  prescription: Prescription[];
}

export interface Insurance {
  provider: string;
  policyNo: string;
}

export interface PatientRecord {
  patientId: string;
  name: string;
  age: number;
  visit: PatientVisit;
  insurance: Insurance;
}

export interface AccountDetails {
  holder: string;
  number: string;
}

export interface TransactionDetails {
  amount: number;
  type: string;
  date: string;
  branch: {
    name: string;
    ifsc: string;
  };
}

export interface Transaction {
  account: AccountDetails;
  details: TransactionDetails;
}

export interface Manufacturer {
  brand: string;
  warranty: string;
}

export interface ProductReviews {
  rating: number;
  total: number;
}

export interface Product {
  name: string;
  price: number;
  manufacturer: Manufacturer;
  reviews: ProductReviews;
}

export interface Director {
  name: string;
  country: string;
}

export interface Movie {
  info: {
    title: string;
    director: Director;
    release: {
      year: number;
      language: string;
    };
  };
}

export interface Shipment {
  trackingId: string;
  destination: {
    city: string;
    country: string;
  };
  status: {
    current: string;
    lastUpdated: string;
  };
}

export interface Admission {
  student: {
    name: string;
    age: number;
  };
  college: {
    name: string;
    course: string;
  };
  session: {
    start: string;
    end: string;
  };
}

export interface Conference {
  name: string;
  year: number;
  location: {
    city: string;
    venue: string;
  };
  speakers: {
    name: string;
    topic: string;
  }[];
}

export interface InvoiceItem {
  name: string;
  price: number;
}

export interface Invoice {
  invoiceNo: string;
  customer: {
    name: string;
    city: string;
  };
  billing: {
    items: InvoiceItem[];
    total: number;
  };
  date: string;
}

export interface OrderNowItem {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderNow {
  orderId: string;
  customer: {
    name: string;
    location: string;
  };
  items: OrderNowItem[];
  totalAmount: number;
  status: string;
}

export interface Ticket {
  passenger: {
    name: string;
    age: number;
  };
  flight: {
    airline: string;
    number: string;
    route: {
      from: string;
      to: string;
    };
  };
  seat: string;
  date: string;
}

export interface TransactionBank {
  txnId: string;
  sender: {
    name: string;
    account: string;
  };
  receiver: {
    name: string;
    account: string;
  };
  amount: number;
  date: string;
}

export interface ProductSell {
  id: string;
  title: string;
  specs: {
    processor: string;
    storage: string;
    color: string;
  };
  price: number;
}

export interface GuestBook {
  bookingId: string;
  guest: {
    name: string;
    nights: number;
  };
  hotel: {
    name: string;
    city: string;
  };
  room: {
    type: string;
    number: number;
  };
  checkIn: string;
}

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Cart {
  user: {
    name: string;
  };
  items: CartItem[];
  total: number;
}

export interface RestaurantOrder {
  orderId: string;
  customer: {
    name: string;
    table: number;
  };
  items: {
    name: string;
    price: number;
  }[];
  total: number;
}

export interface ClassSchedule {
  subject: string;
  teacher: {
    name: string;
    room: string;
  };
  time: {
    start: string;
    end: string;
  };
}

export interface EcommerceOrder {
  orderId: string;
  customer: {
    name: string;
    contact: {
      email: string;
      phone: string;
    };
    address: {
      street: string;
      city: string;
      pin: number;
    };
  };
  items: {
    name: string;
    qty: number;
    price: number;
  }[];
  payment: {
    mode: string;
    status: string;
  };
  delivery: {
    expected: string;
    status: string;
  };
}