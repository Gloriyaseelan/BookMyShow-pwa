import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  closeTopNav = new BehaviorSubject<boolean>(true)
  myMovies: any = {
    images: [
      { src: 'assets/images/carousel/caro-1.png', alt: 'Image 1' },
      { src: 'assets/images/carousel/caro-2.png', alt: 'Image 2' },
      { src: 'assets/images/carousel/caro-3.png', alt: 'Image 3' }
    ],
    stream: 'assets/images/stream.png',
    premiereImage: 'assets/images/premiereImage.png',
    seats: [
      {
        id: 'R1', sName: 'A',
        availableSeats: [
          { seatId: 'R11', status: false },
          { seatId: 'R12', status: false },
          { seatId: 'R13', status: false },
          { seatId: 'R14', status: false },
          { seatId: 'R15', status: false },
          { seatId: 'R16', status: false },
          { seatId: 'R17', status: false },
          { seatId: 'R18', status: false },
          { seatId: 'R19', status: false },
          { seatId: 'R110', status: false },
          { seatId: 'R111', status: false },
          { seatId: 'R112', status: false },
          { seatId: 'R113', status: false },
          { seatId: 'R114', status: false },
        ]
      },
      {
        id: 'R2', sName: 'B',
        availableSeats: [
          { seatId: 'R21', status: false },
          { seatId: 'R22', status: false },
          { seatId: 'R23', status: false },
          { seatId: 'R24', status: false },
          { seatId: 'R25', status: false },
          { seatId: 'R26', status: false },
          { seatId: 'R27', status: false },
          { seatId: 'R28', status: false },
          { seatId: 'R29', status: false },
          { seatId: 'R210', status: false },
          { seatId: 'R211', status: false },
          { seatId: 'R212', status: false },
          { seatId: 'R213', status: false },
          { seatId: 'R214', status: false },
        ]
      },
      {
        id: 'R3', sName: 'C',
        availableSeats: [
          { seatId: 'R31', status: false },
          { seatId: 'R32', status: false },
          { seatId: 'R33', status: false },
          { seatId: 'R34', status: false },
          { seatId: 'R35', status: false },
          { seatId: 'R36', status: false },
          { seatId: 'R37', status: false },
          { seatId: 'R38', status: false },
          { seatId: 'R39', status: false },
          { seatId: 'R310', status: false },
          { seatId: 'R311', status: false },
          { seatId: 'R312', status: false },
          { seatId: 'R313', status: false },
          { seatId: 'R314', status: false },

        ]
      },
      {
        id: 'R4', sName: 'D',
        availableSeats: [
          { seatId: 'R41', status: false },
          { seatId: 'R42', status: false },
          { seatId: 'R43', status: false },
          { seatId: 'R44', status: false },
          { seatId: 'R45', status: false },
          { seatId: 'R46', status: false },
          { seatId: 'R47', status: false },
          { seatId: 'R48', status: false },
          { seatId: 'R49', status: false },
          { seatId: 'R410', status: false },
          { seatId: 'R411', status: false },
          { seatId: 'R412', status: false },
          { seatId: 'R413', status: false },
          { seatId: 'R414', status: false },
        ]
      },
      {
        id: 'R5', sName: 'E',
        availableSeats: [
          { seatId: 'R51', status: false },
          { seatId: 'R52', status: false },
          { seatId: 'R53', status: false },
          { seatId: 'R54', status: false },
          { seatId: 'R55', status: false },
          { seatId: 'R56', status: false },
          { seatId: 'R57', status: false },
          { seatId: 'R58', status: false },
          { seatId: 'R59', status: false },
          { seatId: 'R510', status: false },
          { seatId: 'R511', status: false },
          { seatId: 'R512', status: false },
          { seatId: 'R513', status: false },
          { seatId: 'R514', status: false },
        ]
      },
      {
        id: 'R6', sName: 'F',
        availableSeats: [
          { seatId: 'R61', status: false },
          { seatId: 'R62', status: false },
          { seatId: 'R63', status: false },
          { seatId: 'R64', status: false },
          { seatId: 'R65', status: false },
          { seatId: 'R66', status: false },
          { seatId: 'R67', status: false },
          { seatId: 'R68', status: false },
          { seatId: 'R69', status: false },
          { seatId: 'R610', status: false },
          { seatId: 'R611', status: false },
          { seatId: 'R612', status: false },
          { seatId: 'R613', status: false },
          { seatId: 'R614', status: false },
        ]
      },
      {
        id: 'R7', sName: 'G',
        availableSeats: [
          { seatId: 'R71', status: false },
          { seatId: 'R72', status: false },
          { seatId: 'R73', status: false },
          { seatId: 'R74', status: false },
          { seatId: 'R75', status: false },
          { seatId: 'R76', status: false },
          { seatId: 'R77', status: false },
          { seatId: 'R78', status: false },
          { seatId: 'R79', status: false },
          { seatId: 'R710', status: false },
          { seatId: 'R711', status: false },
          { seatId: 'R712', status: false },
          { seatId: 'R713', status: false },
          { seatId: 'R714', status: false },
        ]
      },
      {
        id: 'R8', sName: 'H',
        availableSeats: [
          { seatId: 'R81', status: false },
          { seatId: 'R82', status: false },
          { seatId: 'R83', status: false },
          { seatId: 'R84', status: false },
          { seatId: 'R85', status: false },
          { seatId: 'R86', status: false },
          { seatId: 'R87', status: false },
          { seatId: 'R88', status: false },
          { seatId: 'R89', status: false },
          { seatId: 'R810', status: false },
          { seatId: 'R811', status: false },
          { seatId: 'R812', status: false },
          { seatId: 'R813', status: false },
          { seatId: 'R814', status: false },
        ]
      },
      {
        id: 'R9', sName: 'I',
        availableSeats: [
          { seatId: 'R91', status: false },
          { seatId: 'R92', status: false },
          { seatId: 'R93', status: false },
          { seatId: 'R94', status: false },
          { seatId: 'R95', status: false },
          { seatId: 'R96', status: false },
          { seatId: 'R97', status: false },
          { seatId: 'R98', status: false },
          { seatId: 'R99', status: false },
          { seatId: 'R910', status: false },
          { seatId: 'R911', status: false },
          { seatId: 'R912', status: false },
          { seatId: 'R913', status: false },
          { seatId: 'R914', status: false },
        ]
      },
      {
        id: 'R10', sName: 'J',
        availableSeats: [
          { seatId: 'R101', status: false },
          { seatId: 'R102', status: false },
          { seatId: 'R103', status: false },
          { seatId: 'R104', status: false },
          { seatId: 'R105', status: false },
          { seatId: 'R106', status: false },
          { seatId: 'R107', status: false },
          { seatId: 'R108', status: false },
          { seatId: 'R109', status: false },
          { seatId: 'R1010', status: false },
          { seatId: 'R1011', status: false },
          { seatId: 'R1012', status: false },
          { seatId: 'R1013', status: false },
          { seatId: 'R1014', status: false },
        ]
      },
      {
        id: 'R11', sName: 'K',
        availableSeats: [
          { seatId: 'R1101', status: false },
          { seatId: 'R1102', status: false },
          { seatId: 'R1103', status: false },
          { seatId: 'R1104', status: false },
          { seatId: 'R1105', status: false },
          { seatId: 'R1106', status: false },
          { seatId: 'R1107', status: false },
          { seatId: 'R1108', status: false },
          { seatId: 'R1109', status: false },
          { seatId: 'R1110', status: false },
          { seatId: 'R1111', status: false },
          { seatId: 'R1112', status: false },
          { seatId: 'R1113', status: false },
          { seatId: 'R1114', status: false },
        ]
      },
      {
        id: 'R12', sName: 'L',
        availableSeats: [
          { seatId: 'R1201', status: false },
          { seatId: 'R1202', status: false },
          { seatId: 'R1203', status: false },
          { seatId: 'R1204', status: false },
          { seatId: 'R1205', status: false },
          { seatId: 'R1206', status: false },
          { seatId: 'R1207', status: false },
          { seatId: 'R1208', status: false },
          { seatId: 'R1209', status: false },
          { seatId: 'R1210', status: false },
          { seatId: 'R1211', status: false },
          { seatId: 'R1212', status: false },
          { seatId: 'R1213', status: false },
          { seatId: 'R1214', status: false },
        ]
      },

    ],
    selectSeat: [
      {
        title: 'How Many Seats?',
        seats: [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        amount: [
          { name: 'First Class', amount: 150 }
        ]
      }
    ],
    movies: [
      {
        id: 'RM1',
        src: 'assets/images/recommended/img-1.png',
        duration: '2h 38mins',
        ratings: 8,
        alt: 'The Lion King',
        title: 'The Lion King',
        genre: ['Family', 'Musical'],
        theatre: [
          { id: 'RM1T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM', '8:30PM'] },
          { id: 'RM1T2', tName: 'Maxus Cinemas: Saki Naka', favorite: true, timings: ['1:45PM', '10:30PM'] },
          { id: 'RM1T3', tName: 'Gold Cinema: Malad Malvani', favorite: false, timings: ['10:45AM'] }
        ],
        type: 'recommand'
      },
      {
        id: 'RM2',
        src: 'assets/images/recommended/img-2.png',
        duration: '2h 38mins',
        ratings: 9,
        alt: 'Encanto',
        title: 'Encanto',
        genre: ['Family', 'Fantasy'],
        theatre: [
          { id: 'RM2T1', tName: 'K.K. Cinema: Kamothe', favorite: true, timings: ['12:45PM', '10:00AM', '1:00PM'] },
          { id: 'RM2T2', tName: 'Miraj Cinemas: Spine City Mall', favorite: true, timings: ['12:45PM'] },
          { id: 'RM2T3', tName: 'Bollywood Multiplex: Kharadi', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'RM2T4', tName: 'Miraj Cinemas : Mayur Vihar', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'RM2T5', tName: 'Cinepolis: DLF Avenue', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ],
        type: 'recommand'
      },
      {
        id: 'RM3',
        src: 'assets/images/recommended/img-3.png',
        duration: '2h 38mins',
        ratings: 7,
        alt: 'Ratatouille',
        title: 'Ratatouille',
        genre: ['Family', 'Comedy'],
        theatre: [
          { id: 'RM3T3', tName: 'Cinepolis VIP: Lulu Mall', favorite: false, timings: ['12:45PM', '8:30PM'] },
          { id: 'RM3T2', tName: 'Cinepolis: Royal Meenakshi Mall', favorite: true, timings: ['12:45PM'] },
          { id: 'RM3T1', tName: 'Cinepolis: Binnypet Mall', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'RM3T4', tName: 'INOX: Brookefield Mall', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'RM3T5', tName: 'PVR: Bhartiya Mall of Bengaluru', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ],
        type: 'recommand'
      },
      {
        id: 'RM4',
        src: 'assets/images/recommended/img-4.png',
        duration: '2h 38mins',
        ratings: 6,
        alt: 'Zootopia',
        title: 'Zootopia',
        genre: ['Family', 'Comedy'],
        theatre: [
          { id: 'RM4T4', movieName: '', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM', '8:30PM'] },
          { id: 'RM4T2', movieName: '', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'RM4T3', movieName: '', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'RM4T1', movieName: '', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'RM4T5', movieName: '', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ],
        type: 'recommand'
      },
      {
        id: 'RM5',
        src: 'assets/images/premiere/img-4.png',
        duration: '2h 38mins',
        ratings: 8,
        alt: 'Beauty and the Beast',
        title: 'Beauty and the Beast',
        genre: ['Family', 'Comedy'],
        theatre: [
          { id: 'RM5T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'RM5T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'RM5T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'RM5T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'RM5T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ],
        type: 'recommand'
      },
      {
        id: 'PM1', type: 'premier', theatre: [
          { id: 'PM1T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'PM1T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'PM1T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'PM1T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'PM1T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ], genre: ['Family', 'Comedy'], src: 'assets/images/premiere/img-1.png', duration: '2h 38mins', ratings: 8, language: 'English', alt: 'Spider man', title: 'Spider man'
      },
      {
        id: 'PM2', type: 'premier', theatre: [
          { id: 'PM2T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'PM2T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'PM2T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'PM2T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'PM2T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ], genre: ['Family', 'Comedy'], src: 'assets/images/premiere/img-2.png', duration: '2h 38mins', ratings: 8, language: 'English', alt: 'Aladdin', title: 'Aladdin'
      },
      {
        id: 'PM3', type: 'premier', theatre: [
          { id: 'PM3T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'PM3T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'PM3T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'PM3T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'PM3T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ], genre: ['Family', 'Comedy'], src: 'assets/images/premiere/img-3.png', duration: '2h 38mins', ratings: 8, language: 'English', alt: 'Stand by Me', title: 'Stand by Me'
      },
      {
        id: 'PM4', type: 'premier', theatre: [
          { id: 'PM4T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'PM4T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'PM4T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'PM4T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'PM4T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ], genre: ['Family', 'Comedy'], src: 'assets/images/premiere/img-4.png', duration: '2h 38mins', ratings: 8, language: 'English', alt: 'Beauty and the Beast', title: 'Beauty and the Beast'
      },
      {
        id: 'PM5', type: 'premier', theatre: [
          { id: 'PM5T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
          { id: 'PM5T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
          { id: 'PM5T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
          { id: 'PM5T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
          { id: 'PM5T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
        ], genre: ['Family', 'Comedy'], src: 'assets/images/premiere/img-5.png', language: 'English', ratings: 8, alt: 'Tangled', title: 'Tangled', duration: '2h 38mins'
      },
      // { id:'PM6' ,type: 'premier',theatre: [
      //   { id: 'PM6T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
      //   { id: 'PM6T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
      //   { id: 'PM6T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
      //   { id: 'PM6T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
      //   { id: 'PM6T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
      // ],genre: ['Family', 'Comedy'],src: 'assets/images/premiere/img-6.png', language: 'English', alt: 'Luca',ratings: 8, title: 'Luca' ,duration: '2h 38mins'},
      // { id:'PM7' ,type: 'premier',theatre: [
      //   { id: 'PM7T5', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['12:45PM'] },
      //   { id: 'PM7T2', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM'] },
      //   { id: 'PM7T3', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['2:45PM', "9:00AM", '5:00PM'] },
      //   { id: 'PM7T4', tName: 'BMX Cinemas: Ambernath (New)', favorite: true, timings: ['12:45PM', '4:00AM', '8:00PM'] },
      //   { id: 'PM7T1', tName: 'BMX Cinemas: Ambernath (New)', favorite: false, timings: ['5:00PM', '9:00AM'] }
      // ],genre: ['Family', 'Comedy'],src: 'assets/images/premiere/img-7.png', language: 'English', alt: 'Pinocchio',ratings: 8,title: 'Pinocchio' ,duration: '2h 38mins'}
    ]
  }



  paymentDetails: any = {}

  constructor() { }

  ngOnInit() {
  }

  updateClose(data: any) {
    this.closeTopNav.next(data)
  }



}
